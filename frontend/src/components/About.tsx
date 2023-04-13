export default function About() {
  return (
    <div className="xs:m-4 xs:mt-10 xs:px-10 mt-6 rounded-md bg-gray-200/20 px-4 py-6 text-justify text-sm shadow-lg">
      <p>
        Hello! My name is Łukasz and I'm&nbsp;Frontend Developer. This app is a&nbsp;part of my
        portfolio that I&nbsp;have made while improving my coding skills.
        <br />
        This is web application for checking actual weather in choosen city. Write a&nbsp;city name
        above, to check weather conditions and forecast for next hours and days. The app uses
        external API from:
        <br />
        <a
          href="https://openweathermap.org/"
          className="inline-block underline underline-offset-2 hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.openweathermap.org
        </a>
        <br />
        Read more about me and see my other apps with source codes at:
        <br />
      </p>
      <a
        href="https://lukaszsliwinski.pl/"
        className="w-100 mt-1 block cursor-pointer text-center text-base font-bold underline underline-offset-2 hover:text-gray-300"
      >
        www.lukaszsliwinski.pl
      </a>
    </div>
  );
}
