import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

interface ProjectData {
  slug: string;
  title?: string;
  description?: string;
  tags?: string[];
  is_pinned?: number;
  [key: string]: any;
}

const Projects = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    const modules = import.meta.glob('../../content/projects/*.mdx', { eager: true });

    const projectData = Object.keys(modules).map((path) => {
      const mod = modules[path] as any;
      const slug = path.split('/').pop()?.replace('.mdx', '');
      return { ...mod.meta, slug } as ProjectData;
    });

    // --- NEW SORTING LOGIC ---
    const sortedData = projectData.sort((a, b) => {
      // Fallback to 0 if the is_pinned flag is missing from the MDX file
      const pinA = a.is_pinned || 0;
      const pinB = b.is_pinned || 0;

      // Tier 1: Both projects are pinned. Sort them by their assigned number (1, 2, 3...)
      if (pinA > 0 && pinB > 0) {
        return pinA - pinB;
      }

      // Tier 2: Only one project is pinned. The pinned one bubbles to the top.
      if (pinA > 0) return -1;
      if (pinB > 0) return 1;

      // Tier 3: Neither project is pinned. Sort them by Date (Newest to Oldest).
      // We convert the date strings to timestamps to do reliable math.
      const dateA = new Date(a.date || 0).getTime();
      const dateB = new Date(b.date || 0).getTime();

      return dateB - dateA;
    });

    // Set the state with our newly sorted array
    setProjects(sortedData);
  }, []);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Projects</h1>

      {/* This wrapper applies the CSS Grid */}
      <div className={styles.grid}>
        {projects.map((project) => (
          // Replace the outer <div> with a <Link>
          <Link
            to={`/projects/${project.slug}`}
            key={project.slug}
            className={styles.card}
          >
            {/* Ensure your heading has a distinct class name */}
            <h2 className={styles.cardTitle}>{project.title}</h2>

            <p className={styles.cardDescription}>{project.description}</p>
            <p className={styles.date}>{project.date}</p>

            {/* The new wrapper to hide the overflow and apply the fade mask */}
            <div className={styles.tagWrapper}>
              {project.tags && (
                <div className={styles.tagContainer}>
                  {/* Render the original set of tags */}
                  {project.tags.map((tag, index) => (
                    <span key={`original-${tag}-${index}`} className={styles.tag}>
                      {tag}
                    </span>
                  ))}

                  {/* Render a duplicate set to create the seamless visual loop */}
                  {project.tags.map((tag, index) => (
                    <span key={`duplicate-${tag}-${index}`} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>    </section >
  );
};

export default Projects;



