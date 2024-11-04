/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'FASMETRICS S.A',
    position: 'Data & Benchmarking Engineer',
    url: 'https://www.fasmetrics.com/index.php/en/',
    startDate: '2024-03-01',
    endDate: '2024-09-01',
    summary: 'Fasmetrics is a telecommunication manufacturing and benchmark consulting company. ',
    highlights: [
      'Developed a comprehensive Network Monitoring System for supervising sea-side antenna performance, where I contributed across all layers of the platform\'s architecture.',
      'Benchmarked mobile network providers (RF) radio frequency though drive test testing, data analysis and layer-3 analysis.',
    ],
  },
  {
    name: 'The Moratis School',
    position: 'Educator',
    url: 'https://www.fasmetrics.com/index.php/en/',
    startDate: '2022-09-01',
    endDate: '2023-08-01',
    summary: 'The Moraitis School is one of the largest  co-educational private school in Athens, Greece. ',
    highlights: [
      'Educated elementary school students through Microsoft\'s Minecraft Education Edition with coding, interdisciplinary tasks, project-based learning, and collaboration.',
    ],
  },
];

export default work;
