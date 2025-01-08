    import { createSignal, createEffect } from 'solid-js';
import axios from 'axios';

const AboutMe = () => {
  const [aboutMe, setAboutMe] = createSignal({});

  // Equivalent of onMount in SolidJS
  createEffect(async () => {
    try {
      const response = await axios.get('http://202.177.41.198:9091/api/about_me');
      setAboutMe(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div class="relative max-w-md mx-auto md:max-w-2xl mt-18 min-w-0 break-words w-full mb-6 shadow-lg rounded-xl mt-16  p-3 border backdrop-filter backdrop-blur-md bg-opacity-10 bg-white">
      <div class="flex justify-center">
        <img
        src='/assets/images/AyushProfile.jpg'
          alt="AyushProfile.jpg"
          class="shadow-xl rounded-full absolute border-none size-36 -mt-16"
        />
      </div>

      <div class="w-full text-center mt-20">
        <div class="flex justify-center lg:pt-4 pt-2 pb-0">
          <div class="p-3 text-center">
            <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">3,360</span>
            <span class="text-sm text-slate-400">Photos</span>
          </div>
          <div class="p-3 text-center">
            <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">2,454</span>
            <span class="text-sm text-slate-400">Followers</span>
          </div>

          <div class="p-3 text-center">
            <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">564</span>
            <span class="text-sm text-slate-400">Following</span>
          </div>
        </div>
      </div>
      <div class="text-center mt-2">
        <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">Ayush Prashant Nair</h3>
        <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
          <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Melbourne, Australia
        </div>
      </div>
      <div class="mt-6 py-6 border-t border-slate-200 text-center">
        <div class="flex flex-wrap justify-center">
          <div class="w-full px-4">
            <p class="font-light leading-relaxed text-slate-600 mb-4">
              Hi, I'm Ayush, a passionate graphic designer crafting visually compelling designs. I specialize in logo design,
              branding, print media, and digital art, creating unique visual identities that tell a story. My goal is to combine
              creativity with strategy to deliver designs that not only look great but also resonate with audiences and achieve
              business objectives.
              <br /><br />
              I work with a variety of clients, from startups to established brands, helping them bring their vision to life
              through thoughtful and creative design. Whether it's a logo, website, or full branding suite, I aim to create
              designs that leave a lasting impression.
              <br /><br />
              Explore my portfolio to see some of my recent work, and feel free to reach out for collaboration or inquiries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
