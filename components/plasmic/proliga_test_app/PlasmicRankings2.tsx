// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tCfLmaaHRZLhqCMNBDT3fx
// Component: b4VJUmcvygSD

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms";
import { CmsRowField } from "@plasmicpkgs/plasmic-cms";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tCfLmaaHRZLhqCMNBDT3fx/projectcss
import sty from "./PlasmicRankings2.module.css"; // plasmic-import: b4VJUmcvygSD/css

createPlasmicElementProxy;

export type PlasmicRankings2__VariantMembers = {};
export type PlasmicRankings2__VariantsArgs = {};
type VariantPropType = keyof PlasmicRankings2__VariantsArgs;
export const PlasmicRankings2__VariantProps = new Array<VariantPropType>();

export type PlasmicRankings2__ArgsType = {};
type ArgPropType = keyof PlasmicRankings2__ArgsType;
export const PlasmicRankings2__ArgProps = new Array<ArgPropType>();

export type PlasmicRankings2__OverridesType = {
  root?: Flex__<"div">;
  cmsDataFetcher?: Flex__<typeof CmsQueryRepeater>;
};

export interface DefaultRankings2Props {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRankings2__RenderFunc(props: {
  variants: PlasmicRankings2__VariantsArgs;
  args: PlasmicRankings2__ArgsType;
  overrides: PlasmicRankings2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__vsB)}>
        <CmsQueryRepeater
          data-plasmic-name={"cmsDataFetcher"}
          data-plasmic-override={overrides.cmsDataFetcher}
          className={classNames("__wab_instance", sty.cmsDataFetcher)}
          desc={false}
          emptyMessage={
            <DataCtxReader__>
              {$ctx => (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fz39Y
                  )}
                >
                  {"No matching published entries found."}
                </div>
              )}
            </DataCtxReader__>
          }
          fields={["avatar", "newField", "name", "balance", "point", "pointF"]}
          forceEmptyState={false}
          forceLoadingState={false}
          limit={0}
          loadingMessage={
            <DataCtxReader__>
              {$ctx => (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__g1HAx
                  )}
                >
                  {"Loading..."}
                </div>
              )}
            </DataCtxReader__>
          }
          noAutoRepeat={false}
          noLayout={false}
          table={"managerRankings"}
          useDraft={false}
        >
          <DataCtxReader__>
            {$ctx =>
              (_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))([
                2, 3, 4
              ]).map((__plasmic_item_0, __plasmic_idx_0) => {
                const currentItem = __plasmic_item_0;
                const currentIndex = __plasmic_idx_0;
                return (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__ugVra)}
                    key={currentIndex}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__zk46L)}
                    >
                      <CmsRowField
                        className={classNames(
                          "__wab_instance",
                          sty.cmsEntryField__rHivb
                        )}
                        field={"avatar"}
                        themeResetClassName={classNames(
                          projectcss.root_reset,
                          projectcss.root_reset_tags,
                          projectcss.plasmic_default_styles,
                          projectcss.plasmic_mixins,
                          projectcss.plasmic_tokens,
                          plasmic_antd_5_hostless_css.plasmic_tokens,
                          plasmic_plasmic_rich_components_css.plasmic_tokens
                        )}
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__wV9R)}
                    >
                      <CmsRowField
                        className={classNames(
                          "__wab_instance",
                          sty.cmsEntryField__vCfNe
                        )}
                        themeResetClassName={classNames(
                          projectcss.root_reset,
                          projectcss.root_reset_tags,
                          projectcss.plasmic_default_styles,
                          projectcss.plasmic_mixins,
                          projectcss.plasmic_tokens,
                          plasmic_antd_5_hostless_css.plasmic_tokens,
                          plasmic_plasmic_rich_components_css.plasmic_tokens
                        )}
                      />

                      <CmsRowField
                        className={classNames(
                          "__wab_instance",
                          sty.cmsEntryField___3L6Ur
                        )}
                        field={"balance"}
                        themeResetClassName={classNames(
                          projectcss.root_reset,
                          projectcss.root_reset_tags,
                          projectcss.plasmic_default_styles,
                          projectcss.plasmic_mixins,
                          projectcss.plasmic_tokens,
                          plasmic_antd_5_hostless_css.plasmic_tokens,
                          plasmic_plasmic_rich_components_css.plasmic_tokens
                        )}
                      />
                    </div>
                    <CmsRowField
                      className={classNames(
                        "__wab_instance",
                        sty.cmsEntryField___6QMxP
                      )}
                      field={"point"}
                      themeResetClassName={classNames(
                        projectcss.root_reset,
                        projectcss.root_reset_tags,
                        projectcss.plasmic_default_styles,
                        projectcss.plasmic_mixins,
                        projectcss.plasmic_tokens,
                        plasmic_antd_5_hostless_css.plasmic_tokens,
                        plasmic_plasmic_rich_components_css.plasmic_tokens
                      )}
                    />

                    <CmsRowField
                      className={classNames(
                        "__wab_instance",
                        sty.cmsEntryField__nvi8S
                      )}
                      field={"pointF"}
                      themeResetClassName={classNames(
                        projectcss.root_reset,
                        projectcss.root_reset_tags,
                        projectcss.plasmic_default_styles,
                        projectcss.plasmic_mixins,
                        projectcss.plasmic_tokens,
                        plasmic_antd_5_hostless_css.plasmic_tokens,
                        plasmic_plasmic_rich_components_css.plasmic_tokens
                      )}
                    />
                  </div>
                );
              })
            }
          </DataCtxReader__>
        </CmsQueryRepeater>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "cmsDataFetcher"],
  cmsDataFetcher: ["cmsDataFetcher"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  cmsDataFetcher: typeof CmsQueryRepeater;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRankings2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRankings2__VariantsArgs;
    args?: PlasmicRankings2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRankings2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRankings2__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicRankings2__ArgProps,
          internalVariantPropNames: PlasmicRankings2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRankings2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRankings2";
  } else {
    func.displayName = `PlasmicRankings2.${nodeName}`;
  }
  return func;
}

export const PlasmicRankings2 = Object.assign(
  // Top-level PlasmicRankings2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cmsDataFetcher: makeNodeComponent("cmsDataFetcher"),

    // Metadata about props expected for PlasmicRankings2
    internalVariantProps: PlasmicRankings2__VariantProps,
    internalArgProps: PlasmicRankings2__ArgProps
  }
);

export default PlasmicRankings2;
/* prettier-ignore-end */
