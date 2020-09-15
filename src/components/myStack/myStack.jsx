import React from 'react';

const myStack = () => {
    return (
      <>
        <p className="block w-full mb-8">
          These are my preferred libraries &amp; technologies that I use in my
          projects. I am currently exploring the GRAND stack for my latest project, which I am very excited about. GRAND stack includes GraphQL, React JS, Apollo, Neo4J Graph Database.
        </p>
        <pre className="whitespace-normal bg-dark text-gray-600 shadow-xl p-8 rounded-lg overflow-x-scroll">
          <code>
            <span className="text-quartary">"react"</span>: "My favorite
            javascript library",
            <br />
            <span className="text-quartary">"apollo"</span>: "a GRAPHQL tooling library (an interface between the db and the front-end)",
            <br />
            <span className="text-quartary">"typescript"</span>: "I am just
            starting to learn this syntax",
            <br />
            <span className="text-quartary">"neo4j"</span>: "a graph database. Graph databases are extremely powerful for relationship data",
            <br />
            <span className="text-quartary">"gatsbyjs"</span>: "A React
            framework that helps in building semantic sites and apps.",
            <br />
            <span className="text-quartary">"react-hook-forms"</span>: "A
            light-weight form library for React",
            <br />
            <span className="text-quartary">"tailwind-css"</span>: "A highly
            customizable, low-level, unopinionated CSS framework"
          </code>
        </pre>
      </>
    );
}

export default myStack;