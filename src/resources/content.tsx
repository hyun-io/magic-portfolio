import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "E'zzati",
  lastName: "Roslan",
  name: "Hyun",
  role: "Frontend Designer and Developer",
  avatar: "/images/avatar.jpg",
  email: "hyun.dev@proton.me",
  location: "Asia/Brunei", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa Melayu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Websites that work as good as they look</>,
  description: <>No spam — just good deals when they drop. 🎉</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/hyun-io",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/hyun.dev/",
    essential: true,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@hyun.dev",
    essential: true,
  },
  {
    name: "Buy me a coffee",
    icon: "buymeacoffee",
    link: "https://buymeacoffee.com/hyunim",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Available for work</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/a-real-time-shared-entertainment-tracker-for-couples",
  },
  subline: (
    <>
    I'm a Brunei-based Frontend Developer crafting digital experiences at the intersection of <Text size="xl" weight="strong">design</Text>, <Text size="xl" weight="strong">technology</Text>, and <Text size="xl" weight="strong">user experience</Text> so your business shows up online the way it deserves to
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>Hi, I'm Hyun &#128075;</p>

        <p>Based in Brunei and backed by 6+ years of experience, I build digital experiences that help businesses grow.</p>

        <p>I specialise in creating everything from minimalist personal portfolios to complex, full-scale web applications. By blending creative design with modern technical stacks, I ensure your brand is both beautiful and functional.</p>

        <p>My commitment: No mess, no stress. I use structured project management to ensure every milestone is met and every update is clear.</p>

        <p>Straightforward communication. Rapid response times. High-end results.</p>

        <p>Let’s build your future online. 🚀</p>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Lumora Studio",
        timeframe: "Sep. 2025 - Present",
        role: "Founder & Creative Technologist",
        achievements: [
          <div key="fly-achievement-1">
            Conceptualised and launched Lumora Studio, overseeing the end-to-end development of the "lumobooth" mobile studio.
          </div>,
          <div key="fly-achievement-2">
            Engineered a portable, premium self-photography experience, scaling the business from a fixed concept to a mobile service for corporate and private events.
          </div>,
          <div key="fly-achievement-2">
            Designed and deployed the company’s digital presence and internal tools, focusing on seamless user experience and performance.
          </div>,
          <div key="fly-achievement-2">
            Directed all branding assets, including website UI, social media content, and physical marketing collaterals.
          </div>,
          <div key="fly-achievement-2">
            Manages full-scale event operations, from client consultation and site scouting to inventory management and on-site production.
          </div>,
          <div key="fly-achievement-2">
            Curated a "private studio" atmosphere within a mobile footprint, managing lighting design, backdrop selection, and prop curation to maintain a premium brand standard.
          </div>,

        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
            // src: "/images/projects/project-01/cover-01.jpg",
            // alt: "Once UI Project",
            // width: 16,
            // height: 9,
          //},
        ],
      },
      {
        company: "GMPF SDN. BHD",
        timeframe: "Apr. 2022 - Mar. 2023",
        role: "Creative Designer & Director",
        achievements: [
          <div key="creativ3-achievement-1">
            Designed high-impact social media assets, key visuals, and marketing collaterals for diverse brand campaigns.
          </div>,
          <div key="creativ3-achievement-2">
            Managed comprehensive production timelines as a Producer, ensuring seamless execution from concept to final delivery.
          </div>,
          <div key="creativ3-achievement-1">Directed videography for major campaigns, managing professional lighting and audio configurations to ensure high-production value.
          </div>,
          <div key="creativ3-achievement-1">Executed professional product and lifestyle photography, including high-end post-production and retouching.
          </div>,
          <div key="creativ3-achievement-1">Maintained asset integrity and resource management through systematic monthly inventory audits.
          </div>,
        ],
        images: [],
      },
      {
        company: "Kaleidoscope Studio",
        timeframe: "Feb. 2019 - Jul. 2019",
        role: "Multimedia Design Intern",
        achievements: [
          <div key="creativ3-achievement-1">
            Contributed to the design and conceptualisation of the studio&#39;s website, focusing on a clean and functional user experience.
          </div>,
          <div key="creativ3-achievement-2">
            Developed high-impact promotional posters and custom label designs for various studio products and services.
          </div>,
          <div key="creativ3-achievement-1">Produced professional photography and videography assets to drive engagement for promotional events and studio campaigns.
          </div>,
          <div key="creativ3-achievement-1">Managed post-production workflows for digital and print assets, ensuring a consistent brand aesthetic across all platforms.
          </div>,
        ],
        images: [],
      },
      {
        company: "Royal Brunei Catering",
        timeframe: "Jan. 2019 - Jan. 2019",
        role: "Multimedia Design Intern",
        achievements: [
          <div key="creativ3-achievement-1">
            Designed high-impact promotional posters and digital assets for a diverse portfolio of restaurant brands.
          </div>,
          <div key="creativ3-achievement-2">
            Conceptualised and executed animated designs to enhance social media engagement and digital marketing campaigns.
          </div>,
          <div key="creativ3-achievement-1">Directed and produced promotional video content and cinematography for the marketing team to drive brand awareness.
          </div>,
          <div key="creativ3-achievement-1">Captured professional imagery for several restaurant outlets, focusing on high-end presentation and brand storytelling.
          </div>,
        ],
        images: [],
      },
      {
        company: "PixLife Studio",
        timeframe: "Mar. 2017 - Dec. 2017",
        role: "Cinematography & Production Intern",
        achievements: [
          <div key="creativ3-achievement-1">
            Directed and filmed high-end wedding productions, leading on-site teams to ensure comprehensive coverage of live events.
          </div>,
          <div key="creativ3-achievement-2">
            Managed end-to-end technical setups, including camera configurations, gimbal stabilization, and professional lighting arrays.
          </div>,
          <div key="creativ3-achievement-1">Developed expertise in professional studio photography, specializing in the use of external standing flash and advanced lighting techniques.
          </div>,
          <div key="creativ3-achievement-1">Engineered the full editing workflow to produce polished, cinematic wedding films, managing everything from color grading to narrative pacing.
          </div>,
        ],
        images: [],
      },
      {
        company: "MMW Creative",
        timeframe: "Jun. 2016 - Aug. 2016",
        role: "Multimedia & Web Intern",
        achievements: [
          <div key="creativ3-achievement-1">
            Designed an interactive map layout and floor plan for a large-scale project, currently operational on public interactive kiosks.
          </div>,
          <div key="creativ3-achievement-2">
            Collaborated with the development team to design and build help documentation using HTML, ensuring technical information was accessible and user-friendly.
          </div>,
          <div key="creativ3-achievement-1">Created high-impact promotional posters and produced custom animations to enhance video marketing content.
          </div>,
          <div key="creativ3-achievement-1">Produced durable design systems that continue to serve as the primary navigational interface for the client&#39;s interactive installations.
          </div>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Universiti Teknologi Brunei",
        description: <>B.Sc. in Digital Media &#40;Hons&#41;</>,
      },
      {
        name: "Politeknik Brunei",
        description: <><p>Advanced Diploma in Digital Media</p><p><br/>Awarded the <Text as="strong">best student award</Text> under School of Information,
Communications & Technology &#40;SCI&#41;</p></>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend",
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Backend",
        tags: [
          {
            name: "REST APIs",
            icon: "api",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "CMS",
        tags: [
          {
            name: "WordPress",
            icon: "wordpress",
          },
          {
            name: "WooCommerce",
            icon: "woocommerce",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Design Tools",
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "Adobe Suite",
            icon: "adobe",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Version Control",
        tags: [
          {
            name: "Git",
            icon: "git",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const services = {
  path: "/services",
  label: "Services",
  title: `Services – ${person.name}`,
  description: "Frontend design and development services for local businesses in Brunei.",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, services };
