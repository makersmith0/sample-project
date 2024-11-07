// SamplePage.jsx
import React from 'react';

const SamplePage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to the Sample Page</h1>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2>About This Page</h2>
          <p>This is a sample page created as a demonstration for React component structure. Feel free to customize this page as needed.</p>
        </section>

        <section style={styles.section}>
          <h2>Features</h2>
          <ul>
            <li>Simple component structure</li>
            <li>Reusable styling</li>
            <li>React functional component</li>
          </ul>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>© 2024 Sample Page. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    padding: '0 20px',
    maxWidth: '800px',
  },
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
  },
  main: {
    padding: '20px 0',
  },
  section: {
    marginBottom: '20px',
  },
  footer: {
    backgroundColor: '#f1f1f1',
    color: '#333',
    padding: '10px 0',
    textAlign: 'center',
  },
};

export default SamplePage;