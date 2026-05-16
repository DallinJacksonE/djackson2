import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MDXRenderer from '../../components/MDXRenderer/MDXRenderer';
import styles from './ProjectDetails.module.css';

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();

  // State now holds a React Component AND the metadata object
  const [ProjectComponent, setProjectComponent] = useState<React.ElementType | null>(null);
  const [meta, setMeta] = useState<any>(null);

  useEffect(() => {
    const loadContent = async () => {
      // Lazy load the compiled modules
      const modules = import.meta.glob('../../content/projects/*.mdx');
      const filePath = `../../content/projects/${slug}.mdx`;

      if (modules[filePath]) {
        const mod = await modules[filePath]() as any;

        // mod.default is the actual React component!
        // We use an updater function () => to safely store a component in state
        setProjectComponent(() => mod.default);
        setMeta(mod.meta);
      } else {
        setProjectComponent(null);
      }
    };

    if (slug) loadContent();
  }, [slug]);

  if (!slug) return <div>Project not found.</div>;

  return (
    <section className={styles.container}>
      <Link to="/projects" className={styles.backLink}>&larr; Back to Projects</Link>

      <div className={styles.contentWrapper}>
        {ProjectComponent ? (
          <MDXRenderer Content={ProjectComponent} meta={meta} />
        ) : (
          <p>Loading case study...</p>
        )}
      </div>
    </section>
  );
}
