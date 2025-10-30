export const navbar = {
	logo_text: 'OxNeurotech'
};

// if you dont want it, just set it to an empty string
export const socials = {
	text_on_right: 'OxNeurotech',
	linkedin: `https://www.linkedin.com/company/oxneurotech`,
	github: `https://github.com/OxNeurotech/`,
	mail: `mailto: oxneurotech@gmail.com`
};

export const hi = {
	section_id: `Landing`,
	statement: `THE FUTURE OF NEUROTECH @ OXFORD`,
	button: {
		text: `Join us!`,
		href: socials.mail,
	}
};

export const about = {
	section_title: 'About',
	section_id: 'About',
	paragraphs: [
		`Founded in June 2023, OxNeurotech is Oxford University's student-led society dedicated to advancing the field of neurotechnology,
		 the first within the UK.`,
		`We bring together students from diverse backgrounds in neuroscience, computer science, physics, engineering, and beyond,
		 as we aim to provide a collaborative platform for exploring the intersection between brain science and technology. We do this through:`,
	],
	services: [
		`Hands-on Projects`,
		`Technical Workshops`,
		`Hackathons`,
		`Speaker Events`
	]
};

export const projects = {
	section_title: 'Projects',
	section_id: 'Projects',
	list: [
		{
			project: 'TrueCadence',
			competition: '@ London Neurohack 2025',
			when: 'Jan 2025',
			description: 'A neuro-adaptive YouTube playback speed control system.',
			href: 'https://github.com/OxNeurotech/True-Cadence',
			points: [
				'Identified an EEG biomarker for cognitive load.',
				'Applied a fuzzy controller for real-time control of cognitive load.',
				'Successful testing on multiple ( ~ 10 ) participants at the hackathon.',
				'Built using the OpenBCI Ultracortex Mark IV.'
			]
		},
		{
			project: 'Project Music',
			competition: '',
			when: 'Feb 2024 - Feb 2025',
			description: 'An EEG-based music recommender.',
			href: 'https://github.com/OxNeurotech/project-music',
			points: [
				"Interfaced with the Spotify API to use song attributes as data for recommendations.",
				'Identified EEG biomarkers for song engagement based off research from NIH.',
				'Developed SVM-based algorithms to predict whether a song will be liked.',
			]
		},
		{
			project: 'Dream Painting',
			competition: '@ g.tec Spring School Hackathon 2024',
			when: 'Mar 2024',
			description: 'Using dream EEG data for generative art.',
			href: 'https://github.com/OxNeurotech/Dream-Painting',
			points: [
				"Inspired by DreamDiffusion (Bai et al., 2024).",
				'Modified the diffusion model to work with the Neurosity Crown.'
			]
		},
	]
};

export const events = {
	section_title: 'Events',
	section_id: 'Events',
	list: [
		{
			title: 'Speaker Event: The New Physics of Neurons',
			points: [
				'by Prof. Sonia Contera.',
				'Co-organised with the OUPS.',
			],
			tools: ['06 Feb 2025'],
		},
		{
			title: 'Speaker Event: The Hacker Mindset',
			points: [
				'by Zelda Poem',
				'Co-organised with Oxford Entrepreneurs & Oxford Founders Society'
			],
			tools: ['29 Jan 2025'],
		},
		{
			title: 'Speaker Event: Embodied-AI Solutions for Healthcare and Wearable Robotics',
			points: [
				"by Prof. Liang He",
				'Co-organised with OxRAM & OUPS'
			],
			tools: ['27 Nov 2024'],
		},
		{
			title: 'Workshops Series: Intro to BCIs',
			points: [
				"by John Lee",
				'BCI foundations & Python for EEG analysis'
			],
			tools: ['30 Oct 2024 - 20 Nov 2024'],
		}
	]
};

import zhiyu_zheng_img from "$lib/images/zhiyu_zheng.jpg";
import mattan_pelah_img from "$lib/images/mattan_pelah.jpg";
import daniel_costache_img from "$lib/images/daniel_costache.jpg";
import aditya_khanna_img from "$lib/images/aditya_khanna.jpg";
import sarah_schreiber_img from "$lib/images/sarah_schreiber.jpg";
import john_lee_img from "$lib/images/john_lee.jpg";

export const team = {
	section_title: 'Team',
	section_id: 'Team',
	list: [
		{
			img_ref: zhiyu_zheng_img,
			role: 'President',
			name: 'Zhiyu Zheng (Jerry)',
			about: 'Y4 DPhil Clinical Neurosciences',
			social: 'https://www.linkedin.com/in/zzyicl/',
		},
		{
			img_ref: mattan_pelah_img,
			role: 'Secretary',
			name: 'Mattan Pelah',
			about: 'Y1 DPhil Clinical Neuroengineering',
			social: 'https://www.linkedin.com/in/mattan-pelah/',
		},
		{
			img_ref: daniel_costache_img,
			role: 'Treasurer',
			name: 'Daniel Costache',
			about: 'Y4 MEng Engineering Science',
			social: 'https://www.linkedin.com/in/costache-daniel/',
		},
		{
			img_ref: aditya_khanna_img,
			role: 'Welfare Officer',
			name: 'Aditya Khanna',
			about: 'Y3 MPhys Physics',
			social: 'https://www.linkedin.com/in/aditya-khanna-1b901b200/',
		},
		{
			img_ref: sarah_schreiber_img,
			role: 'Events Coordinator',
			name: 'Sarah',
			about: 'Y3 MRes Engineering Science',
			social: 'https://www.linkedin.com/in/sarah-schreiber-388587375/',
		},
		{
			img_ref: john_lee_img,
			role: 'Co-Founder & Advisor',
			name: 'John Lee',
			about: 'Grad MEng Engineering Science',
			social: 'https://www.linkedin.com/in/lee-chih-jung/',
		},
	]
};

export const signup = {
	section_title: 'Signup',
	section_id: 'Signup',
	paragraphs: [
		`🛠️ We are currently setting up an easier way to sign up to our newsletter.`,
		`In the meantime, email us about your interest in joining OxNeurotech and we will get back to you!`
	],
	button: {
		text: `Email us!`,
		href: "mailto: oxneurotech@gmail.com"
	}
};

export const contact = {
	section_title: 'Contact',
	section_id: 'Contact',
	paragraphs: [
		`Address:`,
		`St Hilda's College, Cowley Place, Oxford, OX4 1DY`,
	],
	button: {
		text: `Email me!`,
		href: "mailto: oxneurotech@gmail.com"
	}
};