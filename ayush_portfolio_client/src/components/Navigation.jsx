import { A } from "@solidjs/router";

const Navigation = () => {
    return (
      <nav class="flex gap-4">
        <A href="/" class="p-2 text-primary-800 hover:text-primary-100  hover:bg-primary-700 hover:scale-125"  activeClass="active" inactiveClass="default" end>Home</A>
        <A href="projects" class="p-2 text-primary-800 hover:text-primary-100  hover:bg-primary-700 hover:scale-125"  activeClass="active" inactiveClass="default" end>Projects</A>
        <A href="about_me" class="p-2 text-primary-800 hover:text-primary-100  hover:bg-primary-700 hover:scale-125"  activeClass="active" inactiveClass="default" end>About Me</A>
        <A href="contact" class="p-2 text-primary-800 hover:text-primary-100  hover:bg-primary-700 hover:scale-125"  activeClass="active" inactiveClass="default" end>Contact</A> 
      </nav>
    );
  };
  
  export default Navigation;
  