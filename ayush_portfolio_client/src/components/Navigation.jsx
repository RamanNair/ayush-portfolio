import { A } from "@solidjs/router";

const Navigation = () => {
  return (
    // <nav class="flex gap-4">
    // </nav>

    <ul class="menu menu-vertical md:menu-horizontal w-full md:space-x-4 bg-base-200 rounded-box">
      <li>
        <A href="/" class="p-2 text-primary-800 hover:text-primary-100  hover:bg-primary-700 hover:scale-125" activeClass="active" inactiveClass="default" end>Home</A>
      </li>
      <li>
        <A href="projects" class="p-2 text-primary-800 hover:text-primary-100  hover:bg-primary-700 hover:scale-125" activeClass="active" inactiveClass="default" end>Projects</A>
      </li>
      <li>
        <A href="about_me" class="p-2 text-primary-800 hover:text-primary-100  hover:bg-primary-700 hover:scale-125" activeClass="active" inactiveClass="default" end>About Me</A>
      </li>
      <li>
        <A href="contact" class="p-2 text-primary-800 hover:text-primary-100  hover:bg-primary-700 hover:scale-125" activeClass="active" inactiveClass="default" end>Contact</A>
      </li>
    </ul>
  );
};

export default Navigation;
