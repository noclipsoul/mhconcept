import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsFeature extends Struct.ComponentSchema {
  collectionName: 'components_components_features';
  info: {
    description: '';
    displayName: 'Feature';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsProject extends Struct.ComponentSchema {
  collectionName: 'components_components_projects';
  info: {
    displayName: 'Project';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    imgs: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsReferences extends Struct.ComponentSchema {
  collectionName: 'components_components_references';
  info: {
    description: '';
    displayName: 'references';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutAbout extends Struct.ComponentSchema {
  collectionName: 'components_layout_abouts';
  info: {
    description: '';
    displayName: 'About';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutContact extends Struct.ComponentSchema {
  collectionName: 'components_layout_contacts';
  info: {
    description: '';
    displayName: 'Contact';
  };
  attributes: {
    description: Schema.Attribute.Text;
    email: Schema.Attribute.String;
    telephone: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_features_sections';
  info: {
    description: '';
    displayName: 'Features Section';
  };
  attributes: {
    bgFeatureimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'components.feature', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logoText: Schema.Attribute.Component<'components.link', false>;
    socialLink: Schema.Attribute.Component<'components.link', true>;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    headerlinks: Schema.Attribute.Component<'components.link', true>;
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'components.link', false>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface LayoutNosReferences extends Struct.ComponentSchema {
  collectionName: 'components_layout_nos_references';
  info: {
    description: '';
    displayName: 'nos-references';
  };
  attributes: {
    reference: Schema.Attribute.Component<'components.references', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutPartnership extends Struct.ComponentSchema {
  collectionName: 'components_layout_partnerships';
  info: {
    description: '';
    displayName: 'partnership';
  };
  attributes: {};
}

export interface LayoutProjects extends Struct.ComponentSchema {
  collectionName: 'components_layout_projects';
  info: {
    description: '';
    displayName: 'Projects Section';
  };
  attributes: {
    Projects: Schema.Attribute.Component<'components.project', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.feature': ComponentsFeature;
      'components.link': ComponentsLink;
      'components.project': ComponentsProject;
      'components.references': ComponentsReferences;
      'layout.about': LayoutAbout;
      'layout.contact': LayoutContact;
      'layout.features-section': LayoutFeaturesSection;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
      'layout.nos-references': LayoutNosReferences;
      'layout.partnership': LayoutPartnership;
      'layout.projects': LayoutProjects;
    }
  }
}
