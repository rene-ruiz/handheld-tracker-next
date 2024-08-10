import GlobalContainer from "./globalContainer";
import Title from "./titles";

const AboutContent = () => {
  return (
    <GlobalContainer>
      <main className="py-12">
        <section className="mb-8">
          <Title>About this project</Title>
          <p className="mb-4">
            Welcome to the PocketTracker project! This web application is
            designed to showcase various handheld consoles and provide users
            with the ability to add consoles to their personal favorites,
            representing their physical collection.
          </p>
          <p className="mb-4">
            The main purpose of this project is to explore and demonstrate the
            capabilities of several modern web development technologies, both on
            the frontend and backend.
          </p>
        </section>
        <section className="mb-8">
          <Title>Technologies used</Title>
          <ul className="list-disc list-inside">
            <li>
              <strong>Frontend:</strong> Built with{" "}
              <span className="font-bold">TypeScript, Next.js, React</span>, and{" "}
              <span className="font-bold">Tailwind CSS</span> for a dynamic and
              responsive user experience.
            </li>
            <li>
              <strong>Backend:</strong> Powered by{" "}
              <span className="font-bold">Python, Django</span>, and{" "}
              <span className="font-bold">Django REST Framework</span> to create
              robust and scalable APIs.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <Title>Features</Title>
          <ul className="list-disc list-inside">
            <li>Browse and explore a curated list of handheld consoles.</li>
            <li>
              Create your own user account to personalize your experience.
            </li>
            <li>
              Add consoles to your favorites list to keep track of your physical
              collection.
            </li>
          </ul>
        </section>
        <section>
          <Title>Get started</Title>
          <p>
            To start exploring the world of handheld consoles, simply{" "}
            <a href="/signup" className="text-blue-600 underline">
              create an account
            </a>{" "}
            and dive in!
          </p>
        </section>
      </main>
    </GlobalContainer>
  );
};

export default AboutContent;
