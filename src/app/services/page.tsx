import {
  Accordion,
  Badge,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Row,
  Tag,
  Text,
  Schema,
  Meta,
  RevealFx,
  Pulse,
} from "@once-ui-system/core";
import { home, baseURL, person, social } from "@/resources";

export async function generateMetadata() {
  const title = "Services";
  const description =
    "Frontend design and development services for local businesses in Brunei. Custom websites built with Next.js and WordPress — starting from BND 500.";
  return Meta.generate({
    title,
    description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(title)}`,
    path: "/services",
  });
}

const WHATSAPP = "https://wa.me/6737422306";
const WORK_HREF = "/work";

type Service = {
  icon: string;
  title: string;
  tagline: string;
  description: string;
  priceFrom: string;
  timeline: string;
  features: string[];
  tags: string[];
  featured: boolean;
};

const services: Service[] = [
  {
    icon: "monitor",
    title: "Starter website",
    tagline: "Perfect for solo businesses, F&B & salons",
    description:
      "A clean, single-page website that puts your business on the map — fast to build and easy to maintain.",
    priceFrom: "BND 500",
    timeline: "~1 week",
    features: [
      "Custom design, not a template",
      "Mobile-friendly & responsive",
      "Contact form + Google Maps",
      "Basic on-page SEO",
    ],
    tags: ["Next.js", "WordPress"],
    featured: false,
  },
  {
    icon: "code",
    title: "Business website",
    tagline: "For SMEs ready to grow online",
    description:
      "A full multi-page website tailored to your brand and built to convert visitors into customers.",
    priceFrom: "BND 1,200",
    timeline: "2–3 weeks",
    features: [
      "Everything in Starter",
      "Up to 6 custom pages",
      "2 rounds of design revisions",
      "SEO + performance optimised",
    ],
    tags: ["Next.js", "WordPress", "Figma"],
    featured: true,
  },
  {
    icon: "shoppingBag",
    title: "E-commerce store",
    tagline: "Start selling online with confidence",
    description:
      "A full online store with product listings, cart, and local payment integration — ready to take orders from day one.",
    priceFrom: "BND 2,500",
    timeline: "3–5 weeks",
    features: [
      "Product catalogue & inventory",
      "Checkout + payment gateway",
      "Mobile-first shopping experience",
      "Order management system",
    ],
    tags: ["WooCommerce", "Next.js"],
    featured: false,
  },
  {
    icon: "shield",
    title: "Care plan",
    tagline: "Ongoing support & peace of mind",
    description:
      "Monthly maintenance so your site stays fast, secure, and up-to-date. Perfect for busy business owners who want to focus on running their business.",
    priceFrom: "BND 80/mo",
    timeline: "Ongoing",
    features: [
      "Content & plugin updates",
      "Security monitoring & patches",
      "Monthly performance check",
      "Priority WhatsApp support",
    ],
    tags: ["Maintenance", "Support"],
    featured: false,
  },
];

const techStack = [
  { name: "Next.js",      icon: "nextjs" },
  { name: "WordPress",    icon: "wordpress" },
  { name: "Figma",        icon: "figma" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "WooCommerce",  icon: "woocommerce" },
  { name: "TypeScript",   icon: "typescript" },
  { name: "Vercel",       icon: "vercel" },
];

const steps = [
  {
    step: "01",
    title: "Discover",
    status: "Initial",
    description: "A free WhatsApp chat or call to understand your goals, audience, and timeline.",
  },
  {
    step: "02",
    title: "Design",
    status: "Creative",
    description: "Mockups and revisions in Figma until the look and feel is exactly right.",
  },
  {
    step: "03",
    title: "Build",
    status: "Development",
    description: "Development, cross-device testing, and final quality checks before anything goes live.",
  },
  {
    step: "04",
    title: "Launch",
    status: "Done",
    description: "Deployment, handoff, and a walkthrough so you're confident managing your new site.",
  },
];

const faqs = [
  {
    question: "Do you work with businesses outside Brunei?",
    answer:
      "Primarily I focus on Brunei-based businesses, but I'm happy to work remotely with clients across Southeast Asia.",
  },
  {
    question: "How do I pay?",
    answer:
      "I accept bank transfer (Baiduri, or BIBD) and cash. A 50% deposit is required to start, with the remainder due on delivery.",
  },
  {
    question: "Can I update the website myself after launch?",
    answer:
      "Yes — WordPress sites let you update content easily without touching code. I also provide a handoff walkthrough for every project.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Your logo, brand colours, and any images you'd like to use. If you don't have these ready yet, no worries — I offer graphic design (logo & brand identity from BND 150) and copywriting (page content from BND 100/page) as paid add-ons, so you can get everything sorted in one place.",
  },
];

export default function Services() {
  return (
    <Column maxWidth="m" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Services"
        description="Frontend design and development services for local businesses in Brunei."
        path="/services"
        image={`/api/og/generate?title=${encodeURIComponent("Services")}`}
        author={{
          name: person.name,
          url: `${baseURL}/services`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* ── Hero ── */}
      <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
        {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Pulse variant="success" size="m"/>
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}

        <Column fillWidth horizontal="center" gap="m">
          <Column maxWidth="s" horizontal="center" align="center">
            <RevealFx translateY="4" delay={0.1} fillWidth horizontal="center" paddingBottom="16">
              <Heading wrap="balance" variant="display-strong-l">
                Websites that work for local businesses
              </Heading>
            </RevealFx>
            <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
              <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
                Custom-built in Next.js or WordPress — designed to attract customers and grow your
                business online.
              </Text>
            </RevealFx>
            <RevealFx translateY="8" delay={0.4} horizontal="center">
              <Row gap="12" wrap horizontal="center">
                <Button
                  href={WHATSAPP}
                  prefixIcon="messageCircle"
                  label="WhatsApp me"
                  size="l"
                  variant="primary"
                  arrowIcon
                   id="arrow-button-1"
                />
                <Button
                  href={WORK_HREF}
                  prefixIcon="grid"
                  label="See my work"
                  size="l"
                  variant="secondary"
                />
              </Row>
            </RevealFx>
          </Column>
        </Column>
      </Column>

      {/* ── Services & pricing ── */}
      <Column fillWidth marginBottom="xl" paddingTop="40">
        <RevealFx translateY="8" fillWidth>
  <Column fillWidth gap="4" marginBottom="l">
    <Heading as="h2" variant="display-strong-s">
      Services & pricing
    </Heading>
    <Text variant="body-default-m" onBackground="neutral-weak">
      Transparent starting prices — final cost depends on scope. Every project gets a free
      quote first.
    </Text>
  </Column>
</RevealFx>

        <Column fillWidth gap="m">
          <RevealFx translateY="8" delay={0.1} fillWidth>
            <Row fillWidth gap="m" s={{ direction: "column" }}>
              {services.slice(0, 2).map((s) => (
                <ServiceCard key={s.title} service={s} />
              ))}
            </Row>
          </RevealFx>

          <RevealFx translateY="8" delay={0.2} fillWidth>
            <Row fillWidth gap="m" s={{ direction: "column" }}>
              {services.slice(2, 4).map((s) => (
                <ServiceCard key={s.title} service={s} />
              ))}
            </Row>
          </RevealFx>

          <RevealFx translateY="8" delay={0.3} fillWidth>
            <Row
              fillWidth
              border="neutral-medium"
              radius="l"
              padding="m"
              gap="m"
              vertical="center"
              background="neutral-weak"
              s={{ direction: "column" }}
            >
              <Row gap="12" vertical="center" flex={1}>
                <Icon name="brackets" onBackground="neutral-weak" size="l" />
                <Column gap="4">
                  <Text variant="heading-strong-s">Need something custom?</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    Booking systems, web apps, portals — send me a message and I'll quote it for
                    your exact needs.
                  </Text>
                </Column>
              </Row>
              <Button
                href={WHATSAPP}
                prefixIcon="messageCircle"
                label="Let's talk"
                size="s"
                variant="secondary"
              />
            </Row>
          </RevealFx>
        </Column>
      </Column>

      {/* ── Tech stack ── */}
      <Column fillWidth marginBottom="xl">
      <RevealFx translateY="8" fillWidth> 
  {/* The fillWidth prop here is key to ensuring the RevealFx container doesn't collapse */}
  <Column fillWidth gap="4" marginBottom="m">
    <Heading as="h2" variant="display-strong-s">
      Built with tools that last
    </Heading>
    <Text variant="body-default-m" onBackground="neutral-weak">
      Every site I deliver is fast, maintainable, and uses technology with a strong track record.
    </Text>
  </Column>
</RevealFx>
        <RevealFx translateY="8" delay={0.1} fillWidth>
          <Row wrap gap="8">
            {techStack.map((tech) => (
  <Tag key={tech.name} size="l" prefixIcon={tech.icon}>
    {tech.name}
  </Tag>
))}
          </Row>
        </RevealFx>
      </Column>

      {/* ── How it works ── */}
<Column fillWidth marginBottom="xl">
  <RevealFx translateY="8" fillWidth>
    <Column fillWidth>
      <Heading as="h2" variant="display-strong-s" marginBottom="4">
        How it works
      </Heading>
      <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="l">
        A straightforward four-step process — no jargon, no surprises.
      </Text>
    </Column>
  </RevealFx>

  <RevealFx translateY="8" delay={0.1} fillWidth>
  <Row fillWidth gap="0" s={{ direction: "column" }}>
    {steps.map((step, i) => (
      <Column key={step.step} paddingBottom="40" s={{ paddingBottom: "32" }} flex={1} style={{ position: 'relative' }}>
        <Row fillWidth vertical="center">
          {/* Step Number Circle */}
          <Row
            width="32"
            height="32"
            background="brand-alpha-weak"
            border="brand-alpha-medium"
            radius="full"
            horizontal="center"
            vertical="center"
          >
            <Text variant="label-strong-s" onBackground="brand-weak">
              {step.step}
            </Text>
          </Row>

          {/* Connector Line */}
          {i !== steps.length - 1 && (
            <Row
              flex={1}
              height="1"
              background="neutral-alpha-medium"
              hide="s"
            />
          )}
        </Row>

        <Column paddingTop="m" paddingRight="m" gap="12">
          <Column gap="4">
            <Text variant="heading-strong-m">{step.title}</Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {step.description}
            </Text>
          </Column>

          {/* Dynamic Tags based on Step Status */}
          <Row>
            {step.status === "Initial" && (
              <Tag variant="neutral" label={step.status} prefixIcon="circle" size="s" />
            )}
            {step.status === "Creative" && (
              <Tag variant="brand" label={step.status} prefixIcon="design" size="s" />
            )}
            {step.status === "Development" && (
              <Tag variant="warning" label={step.status} prefixIcon="loading" size="s" />
            )}
            {step.status === "Done" && (
              <Tag variant="success" label={step.status} prefixIcon="check" size="s" />
            )}
          </Row>
        </Column>
      </Column>
    ))}
  </Row>
</RevealFx>
</Column>

      {/* ── FAQ ── */}
      <Column fillWidth marginBottom="xl">
        <RevealFx translateY="8" fillWidth>
          <Heading as="h2" variant="display-strong-s" marginBottom="l">
            Common questions
          </Heading>
        </RevealFx>
        <Column fillWidth>
          {faqs.map((faq, index) => (
            <RevealFx key={faq.question} translateY="8" delay={index * 0.1} fillWidth>
              <Accordion title={faq.question} open={index === 0}>
                <Text onBackground="neutral-weak">{faq.answer}</Text>
              </Accordion>
            </RevealFx>
          ))}
        </Column>
      </Column>

      {/* ── Bottom CTA ── */}
      <RevealFx translateY="8" fillWidth marginBottom="xl">
  <Column
    fillWidth
    radius="l"
    padding="xl"
    gap="l"
    horizontal="center"
    style={{
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
      background: "var(--neutral-background-strong)",
      border: "1px solid var(--neutral-alpha-medium)",
    }}
  >
    {/* Glow blob */}
    <div style={{
      position: "absolute",
      top: "-60px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "360px",
      height: "200px",
      borderRadius: "50%",
      background: "var(--brand-background-strong)",
      opacity: 0.15,
      filter: "blur(60px)",
      pointerEvents: "none",
    }} />

    {/* Grid overlay */}
    <div style={{
      position: "absolute",
      inset: 0,
      backgroundImage: `
        linear-gradient(var(--neutral-alpha-weak) 1px, transparent 1px),
        linear-gradient(90deg, var(--neutral-alpha-weak) 1px, transparent 1px)
      `,
      backgroundSize: "32px 32px",
      opacity: 0.4,
      pointerEvents: "none",
    }} />

    {/* Content */}
    <Column fillWidth gap="s" horizontal="center" style={{ position: "relative", zIndex: 1 }}>
      <Tag size="m" prefixIcon="sparkle4">Free consultation</Tag>
      <Heading variant="display-strong-l" style={{ maxWidth: "480px" }}>
        Ready to get your business online?
      </Heading>
      <Text
        variant="body-default-l"
        onBackground="neutral-weak"
        style={{ maxWidth: "380px" }}
      >
        Free 30-minute chat over WhatsApp. Strictly no calls. There is no commitment, no pressure. Just an honest good advice.
      </Text>
    </Column>

    <Row gap="12" wrap horizontal="center" style={{ position: "relative", zIndex: 1 }}>
      <Button
        href={WHATSAPP}
        prefixIcon="messageCircle"
        label="WhatsApp me now"
        size="l"
        variant="primary"
        arrowIcon
      />
      {social
        .filter((item) => item.name === "Email" && item.link)
        .map((item) => (
          <Button
            key="email"
            href={item.link}
            prefixIcon="mail"
            label="Send an email"
            size="l"
            variant="secondary"
          />
        ))}
    </Row>
  </Column>
</RevealFx>
    </Column>
  );
}

// ─── ServiceCard ─────────────────────────────────────────────────────────────

function ServiceCard({ service }: { service: Service }) {
  return (
    <Column
      flex={1}
      border={service.featured ? "brand-strong" : "neutral-medium"}
      radius="l"
      padding="l"
      gap="m"
      style={{ position: "relative" }}
    >
      {service.featured && (
        <Row
          style={{ position: "absolute", top: "-12px", left: "20px" }}
          background="brand-strong"
          radius="full"
          paddingX="12"
          paddingY="4"
        >
          <Text variant="label-strong-xs" onBackground="neutral-strong">
            Most popular
          </Text>
        </Row>
      )}

      <Row gap="12" vertical="center">
        <Icon name={service.icon as any} onBackground="brand-weak" size="l" />
        <Column gap="2">
          <Text variant="heading-strong-l">{service.title}</Text>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            {service.tagline}
          </Text>
        </Column>
      </Row>

      <Text variant="body-default-m" onBackground="neutral-weak">
        {service.description}
      </Text>

      <Column
        gap="4"
        border="neutral-alpha-medium"
        radius="m"
        padding="s"
        background="neutral-alpha-weak"
      >
        <Text variant="label-default-xs" onBackground="neutral-weak">
          Starting from
        </Text>
        <Text variant="display-strong-s">{service.priceFrom}</Text>
        <Text variant="body-default-xs" onBackground="neutral-weak">
          Delivery: {service.timeline}
        </Text>
      </Column>

      <Column gap="8">
        {service.features.map((feature) => (
          <Row key={feature} gap="8" vertical="center">
            <Icon name="checkCircle" onBackground="brand-weak" size="s" />
            <Text variant="body-default-s">{feature}</Text>
          </Row>
        ))}
      </Column>

      <Row wrap gap="8">
        {service.tags.map((tag) => (
          <Tag key={tag} size="s">
            {tag}
          </Tag>
        ))}
      </Row>

      <Button
        href={WHATSAPP}
        prefixIcon="messageCircle"
        label="Get a quote on WhatsApp"
        size="m"
        variant={service.featured ? "primary" : "secondary"}
        fillWidth
      />
    </Column>
  );
}