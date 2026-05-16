import styles from './MDXRenderer.module.css';

interface MDXRendererProps {
  Content: React.ElementType; // Accepts the compiled React component
  meta?: any;                 // Accepts the metadata object
}

const MDXRenderer = ({ Content, meta }: MDXRendererProps) => {
  return (
    <div className={styles.container}>
      {/* If your meta object has a title, render it */}
      {meta?.title && <h1>{meta.title}</h1>}

      <div className={styles.content}>
        {/* Render the actual MDX file as a native React component */}
        <Content />
      </div>
    </div>
  );
};

export default MDXRenderer;
