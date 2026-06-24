export interface ServiceFeature {
	icon: string;
	title: string;
	description: string;
}

export interface ServiceStep {
	number: string;
	title: string;
	description: string;
}

export interface ServicePainPoint {
	problem: string;
	solution: string;
}

export interface Service {
	slug: string;
	title: string;
	tagline: string;
	headline: string;
	subheadline: string;
	heroImage: string;
	heroImageAlt: string;
	painPoints: ServicePainPoint[];
	steps: ServiceStep[];
	features: ServiceFeature[];
	testimonial: { quote: string; name: string; role: string };
	ctaText: string;
}

export const services: Service[] = [
	{
		slug: 'websites',
		title: 'Websites & online presence',
		tagline: 'Online presence',
		headline: 'Your restaurant, SACCO, or hospital deserves more than a Facebook page.',
		subheadline:
			'A professional website that brings customers through the door, takes bookings, and builds trust — 24 hours a day, 7 days a week.',
		heroImage: '/images/services/pages/hero-websites.jpg',
		heroImageAlt: 'Developer building a website for a Kenyan business',
		painPoints: [
			{
				problem: 'Customers can\'t find you online',
				solution:
					'A fast, mobile-first website that shows up on Google and makes your business look credible before a customer ever walks in.',
			},
			{
				problem: 'You can\'t take bookings or orders online',
				solution:
					'Built-in reservation pages, online menus, and contact forms that work on any phone — including M-Pesa payment links.',
			},
			{
				problem: 'Your old site looks outdated or nobody maintains it',
				solution:
					'We build sites that are easy to update, and we stick around after launch — no more chasing a developer who\'s gone quiet.',
			},
			{
				problem: 'Competitors look more professional online',
				solution:
					'Confident, enterprise-quality design at SME prices — your site will look like it cost ten times what it did.',
			},
		],
		steps: [
			{
				number: '01',
				title: 'Discovery call',
				description:
					'We learn about your business, your customers, and what you need the website to do. No technical knowledge required.',
			},
			{
				number: '02',
				title: 'Design & build',
				description:
					'We design and build your site in 2–3 weeks. You review and give feedback at every stage before anything goes live.',
			},
			{
				number: '03',
				title: 'Launch & handover',
				description:
					'We launch your site, train your team to manage it, and stay available for updates. You\'re never left alone with a problem.',
			},
		],
		features: [
			{
				icon: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3M6.75 21h10.5',
				title: 'Mobile-first design',
				description: 'Built for phones first — 80% of your customers are on mobile.',
			},
			{
				icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5',
				title: 'Booking & contact forms',
				description: 'Online reservations, appointment requests, and M-Pesa payment links built in.',
			},
			{
				icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
				title: 'SEO optimised',
				description: 'Set up so Google can find you — local search, keywords, and fast load times.',
			},
			{
				icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
				title: 'Secure & fast',
				description: 'SSL certificate, fast hosting, and pages that load even on slow 3G connections.',
			},
		],
		testimonial: {
			quote:
				'Our online menu and booking page now stay full most evenings. Customers say it\'s the easiest way to reach us — and it makes us look like a much bigger operation than we are.',
			name: 'Restaurant Owner',
			role: 'Kirinyaga County',
		},
		ctaText: 'Get your website in 2 weeks',
	},
	{
		slug: 'software',
		title: 'Business & management software',
		tagline: 'Management software',
		headline: 'Stop managing your business in WhatsApp and spreadsheets.',
		subheadline:
			'Custom systems for member management, appointment booking, POS, and reporting — built around how your SACCO, clinic, or business actually works.',
		heroImage: '/images/services/pages/hero-software.jpg',
		heroImageAlt: 'Business professional reviewing management software on a tablet',
		painPoints: [
			{
				problem: 'Member records live in spreadsheets and notebooks',
				solution:
					'A single system where every member, patient, or customer record is searchable, accurate, and accessible by your whole team in real time.',
			},
			{
				problem: 'Staff double-book appointments or forget customer details',
				solution:
					'Centralised scheduling where all staff see live availability, customer history, and notes — no more clashes or missed follow-ups.',
			},
			{
				problem: 'No clear picture of daily sales, stock, or revenue',
				solution:
					'A POS system with inventory tracking and auto-generated daily, weekly, and monthly reports — available on your phone from anywhere.',
			},
			{
				problem: 'Board reports take hours to prepare manually',
				solution:
					'Reports for your SACCO board or clinic management are generated automatically — accurate, formatted, and ready when you need them.',
			},
		],
		steps: [
			{
				number: '01',
				title: 'Workflow assessment',
				description:
					'We map exactly how your business runs today — member registration, appointment flows, sales processes — so we build around your reality, not a generic template.',
			},
			{
				number: '02',
				title: 'Build & integrate',
				description:
					'We build or configure the system, connect it to M-Pesa, your bank, receipt printer, or existing tools. You test it before anything goes live.',
			},
			{
				number: '03',
				title: 'Training & go-live',
				description:
					'Your full team is trained. We go live with you on day one, and provide direct support for the first 30 days — calls, messages, whatever you need.',
			},
		],
		features: [
			{
				icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
				title: 'Member & patient database',
				description: 'Every record searchable, accurate, and backed up automatically.',
			},
			{
				icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z',
				title: 'Appointment scheduling',
				description: 'Live calendars, automated SMS reminders, and no-show reduction.',
			},
			{
				icon: 'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z',
				title: 'POS & inventory',
				description: 'Sales tracking, barcode scanning, and real-time stock levels.',
			},
			{
				icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
				title: 'Auto reports',
				description: 'Daily, weekly, and monthly reports generated without lifting a finger.',
			},
		],
		testimonial: {
			quote:
				'Members can now check their balances and apply for loans without coming into the office. It has cut our front-desk workload significantly and members trust the system.',
			name: 'SACCO Official',
			role: 'Central Kenya',
		},
		ctaText: 'Book a live demo',
	},
	{
		slug: 'ai-tools',
		title: 'AI tools',
		tagline: 'AI & automation',
		headline: 'Your small business now has a 24/7 customer service team.',
		subheadline:
			'AI chatbots, smart scheduling assistants, and automated reporting that free your staff to focus on growth — not admin.',
		heroImage: '/images/services/pages/hero-ai.jpg',
		heroImageAlt: 'AI and digital technology for business automation',
		painPoints: [
			{
				problem: 'Customers message you at 2am and nobody replies',
				solution:
					'An AI assistant that answers FAQs instantly, takes bookings, and escalates urgent messages to you — in English or Swahili, any time of day.',
			},
			{
				problem: 'Scheduling appointments wastes hours of admin time every week',
				solution:
					'AI coordinates schedules, sends automated confirmations and reminders, and significantly reduces no-shows without your staff lifting a finger.',
			},
			{
				problem: 'Business data is buried in messages and notebooks',
				solution:
					'AI pulls data from your operations and generates clear reports on customer behaviour, revenue trends, and forecasts — weekly, automatically.',
			},
			{
				problem: 'You can\'t afford a full-time customer service team',
				solution:
					'AI handles the repetitive questions (prices, hours, availability) so your team only deals with conversations that actually need a human.',
			},
		],
		steps: [
			{
				number: '01',
				title: 'Setup & integration',
				description:
					'We collect your FAQs, business rules, and tone of voice, then connect the AI to your existing WhatsApp, email, or booking system.',
			},
			{
				number: '02',
				title: 'Train & test',
				description:
					'The AI learns your business. You test it, we refine it until it sounds like your team — not a robot.',
			},
			{
				number: '03',
				title: 'Launch & monitor',
				description:
					'Goes live and starts handling customer conversations. You get a weekly report showing what it handled and what it escalated.',
			},
		],
		features: [
			{
				icon: 'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z',
				title: '24/7 AI customer support',
				description: 'Instant replies in English and Swahili — no human required for common questions.',
			},
			{
				icon: 'M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0',
				title: 'Automated SMS reminders',
				description: 'Appointment confirmations and follow-ups sent automatically, reducing no-shows.',
			},
			{
				icon: 'M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z',
				title: 'Smart business reports',
				description: 'Weekly AI-generated summaries of customer trends, revenue, and performance.',
			},
			{
				icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
				title: 'Human escalation',
				description: 'Complex queries are passed straight to your team — the AI knows its limits.',
			},
		],
		testimonial: {
			quote:
				'Booking appointments and managing patient records used to be all paper. The new system is simple enough for our whole team to use from day one.',
			name: 'Clinic Administrator',
			role: 'Kirinyaga County',
		},
		ctaText: 'See a live AI demo',
	},
	{
		slug: 'digital-infrastructure',
		title: 'Digital infrastructure',
		tagline: 'Infrastructure & security',
		headline: 'Your business data shouldn\'t be at risk.',
		subheadline:
			'Reliable hosting, secure payment processing, automatic backups, and 24/7 monitoring — the foundation your website and software need to run without worry.',
		heroImage: '/images/services/pages/hero-infrastructure.jpg',
		heroImageAlt: 'Professional server infrastructure in a secure data centre',
		painPoints: [
			{
				problem: 'Website crashes during busy periods',
				solution:
					'Scalable servers that handle traffic spikes automatically — when a promotion goes out or your busiest day hits, you stay online.',
			},
			{
				problem: 'Worried about hackers or data breaches',
				solution:
					'SSL encryption, firewall protection, and secure data handling for sensitive member records, patient files, and payment data.',
			},
			{
				problem: 'Site loads slowly and customers leave',
				solution:
					'Optimised hosting and a CDN so your pages load in under 2 seconds — even on Safaricom 3G connections across Kenya.',
			},
			{
				problem: 'When something breaks, nobody helps until Monday',
				solution:
					'24/7 monitoring with automatic alerts and a team that responds within the hour — not the next business day.',
			},
		],
		steps: [
			{
				number: '01',
				title: 'Audit & migrate',
				description:
					'We audit your current setup, identify risks, and migrate your website and data to secure infrastructure with zero downtime.',
			},
			{
				number: '02',
				title: 'Configure & secure',
				description:
					'SSL certificates, automated daily backups, payment gateway setup, and firewall configuration — all done for you.',
			},
			{
				number: '03',
				title: 'Monitor & maintain',
				description:
					'We watch your systems 24/7, apply security updates, and scale resources as your business grows.',
			},
		],
		features: [
			{
				icon: 'M5.636 5.636a9 9 0 1012.728 0M12 3v9',
				title: '99.9% uptime',
				description: 'Enterprise-grade reliability so your business never goes offline unexpectedly.',
			},
			{
				icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
				title: 'SSL & data security',
				description: 'Encrypted connections and secure data storage for member, patient, and payment data.',
			},
			{
				icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 2.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
				title: 'Daily backups',
				description: 'Automatic backups stored in multiple locations — restore in minutes if anything goes wrong.',
			},
			{
				icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z',
				title: '24/7 monitoring',
				description: 'Automated alerts and a team that responds within an hour, any day of the week.',
			},
		],
		testimonial: {
			quote:
				'Our members can now see events and pay for memberships online. It has made the club feel a lot more modern, and saved our committee a lot of admin time.',
			name: 'Club Manager',
			role: 'Kirinyaga County',
		},
		ctaText: 'Talk to our infrastructure team',
	},
	{
		slug: 'branding-marketing',
		title: 'Branding, print & marketing',
		tagline: 'Branding & marketing',
		headline: 'Your brand doesn\'t have to look like every other business in town.',
		subheadline:
			'Logo design, brand identity, posters, flyers, and marketing support — built for Kenyan businesses that want to stand out and be remembered.',
		heroImage: '/images/services/pages/hero-branding.jpg',
		heroImageAlt: 'Creative professional working on brand and marketing design',
		painPoints: [
			{
				problem: 'Your logo looks generic or was made in a hurry',
				solution:
					'A professionally designed logo that reflects your real business — not a stock icon with your name on it. Unlimited revisions until it\'s right.',
			},
			{
				problem: 'Flyers and business cards aren\'t working',
				solution:
					'Print materials designed with purpose — layouts and messaging that make people stop, read, and remember your business.',
			},
			{
				problem: 'Your brand looks different on every platform',
				solution:
					'A complete brand identity system: logo, colours, fonts, and guidelines so everything from your signage to your WhatsApp profile looks consistent.',
			},
			{
				problem: 'You\'re spending on marketing but not seeing results',
				solution:
					'Marketing materials designed around your actual customers and channels — WhatsApp, in-store posters, social media — not generic templates.',
			},
		],
		steps: [
			{
				number: '01',
				title: 'Brand discovery',
				description:
					'We learn your story, your competitors, and what makes you different. This shapes everything we design — not just the logo.',
			},
			{
				number: '02',
				title: 'Design & refine',
				description:
					'We present logo concepts, colour palettes, and brand guidelines. You give feedback, we refine. No rushed decisions.',
			},
			{
				number: '03',
				title: 'Full rollout',
				description:
					'All materials designed and delivered: business cards, flyers, posters, social media templates, and a brand guideline document your team can use going forward.',
			},
		],
		features: [
			{
				icon: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42',
				title: 'Logo design',
				description: 'Professional logo with unlimited revisions — yours in every format you need.',
			},
			{
				icon: 'M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z',
				title: 'Brand identity system',
				description: 'Colours, fonts, and usage guidelines so your brand is always consistent.',
			},
			{
				icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
				title: 'Print materials',
				description: 'Business cards, flyers, posters, and branded envelopes — print-ready files.',
			},
			{
				icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605',
				title: 'Social media templates',
				description: 'Ready-to-use designs for WhatsApp, Facebook, and Instagram posts.',
			},
		],
		testimonial: {
			quote:
				'Our online menu and booking page now stay full most evenings. Customers say it\'s the easiest way to reach us — and it makes us look like a much bigger operation than we are.',
			name: 'Restaurant Owner',
			role: 'Kirinyaga County',
		},
		ctaText: 'Get a free brand consultation',
	},
];

export function getServiceBySlug(slug: string): Service | undefined {
	return services.find((s) => s.slug === slug);
}
