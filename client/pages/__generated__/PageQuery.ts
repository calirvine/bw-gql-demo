/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PageQuery
// ====================================================

export interface PageQuery_getPageBySlug_sections {
  __typename: "HeroSection" | "OneBlockSection";
}

export interface PageQuery_getPageBySlug {
  __typename: "Page";
  sections: PageQuery_getPageBySlug_sections[];
}

export interface PageQuery {
  getPageBySlug: PageQuery_getPageBySlug | null;
}

export interface PageQueryVariables {
  slug: string;
}
