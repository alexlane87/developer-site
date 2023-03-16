/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */

  someSidebar: {
    "Hosted PBX": [
      {
        type: 'doc',
        id: 'direct/introduction',
      },
      {
        type: 'category',
        label: 'APIs',
        items: ['direct/api/v1'],
      },
      {
        type: 'category',
        label: 'Clients',
        items: ['direct/clients/node', 'direct/clients/python', 'direct/clients/go'],
      },
    ],
    
   "Carrier Services": [
      {
        type: 'doc',
        id: 'wholesale/introduction',
      },
      {
        type: 'category',
        label: 'APIs',
        items: ['wholesale/api/v3.20'],
      },
      {
        type: 'category',
        label: 'walkthroutghs',
        items: ['wholesale/walkthroughs/new_trunk_config'],
      },
    ]

  },
};

module.exports = sidebars;
