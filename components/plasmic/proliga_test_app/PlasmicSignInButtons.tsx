// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tCfLmaaHRZLhqCMNBDT3fx
// Component: PRwlDeJ3genv

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

import Button from "../../Button"; // plasmic-import: j5o5xPWcHXxc/component
import { GraphCMSFetcher } from "@plasmicpkgs/plasmic-graphcms";
import { GraphCMSField } from "@plasmicpkgs/plasmic-graphcms";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantsdXwyGmjSdG } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -d_XWYGmjSdG/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tCfLmaaHRZLhqCMNBDT3fx/projectcss
import sty from "./PlasmicSignInButtons.module.css"; // plasmic-import: PRwlDeJ3genv/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 3ii2Ka38u59S/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: VUB87-ym8GeH/icon

createPlasmicElementProxy;

export type PlasmicSignInButtons__VariantMembers = {};
export type PlasmicSignInButtons__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignInButtons__VariantsArgs;
export const PlasmicSignInButtons__VariantProps = new Array<VariantPropType>();

export type PlasmicSignInButtons__ArgsType = {};
type ArgPropType = keyof PlasmicSignInButtons__ArgsType;
export const PlasmicSignInButtons__ArgProps = new Array<ArgPropType>();

export type PlasmicSignInButtons__OverridesType = {
  root?: Flex__<"div">;
  h6?: Flex__<"h6">;
  link?: Flex__<"a"> & Partial<LinkProps>;
  hygraphFetcher?: Flex__<typeof GraphCMSFetcher>;
  hygraphField?: Flex__<typeof GraphCMSField>;
};

export interface DefaultSignInButtonsProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSignInButtons__RenderFunc(props: {
  variants: PlasmicSignInButtons__VariantsArgs;
  args: PlasmicSignInButtons__ArgsType;
  overrides: PlasmicSignInButtons__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsdXwyGmjSdG()
  });

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
      onClick={async event => {
        const $steps = {};

        $steps["goToCreateAccount"] = true
          ? (() => {
              const actionArgs = { destination: "create-account" };
              return (({ destination }) => {
                if (
                  typeof destination === "string" &&
                  destination.startsWith("#")
                ) {
                  document
                    .getElementById(destination.substr(1))
                    .scrollIntoView({ behavior: "smooth" });
                } else {
                  __nextRouter?.push(destination);
                }
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["goToCreateAccount"] != null &&
          typeof $steps["goToCreateAccount"] === "object" &&
          typeof $steps["goToCreateAccount"].then === "function"
        ) {
          $steps["goToCreateAccount"] = await $steps["goToCreateAccount"];
        }

        $steps["goToLogin"] = true
          ? (() => {
              const actionArgs = { destination: "login" };
              return (({ destination }) => {
                if (
                  typeof destination === "string" &&
                  destination.startsWith("#")
                ) {
                  document
                    .getElementById(destination.substr(1))
                    .scrollIntoView({ behavior: "smooth" });
                } else {
                  __nextRouter?.push(destination);
                }
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["goToLogin"] != null &&
          typeof $steps["goToLogin"] === "object" &&
          typeof $steps["goToLogin"].then === "function"
        ) {
          $steps["goToLogin"] = await $steps["goToLogin"];
        }
      }}
    >
      <div className={classNames(projectcss.all, sty.freeBox___78SoC)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__xqSxi)}
        >
          <Button className={classNames("__wab_instance", sty.button__nZ5T)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__yCSl
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                {
                  <h6
                    data-plasmic-name={"h6"}
                    data-plasmic-override={overrides.h6}
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6
                    )}
                  >
                    {"Create Account"}
                  </h6>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>
          </Button>
          <PlasmicLink__
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(projectcss.all, projectcss.a, sty.link)}
            component={Link}
            href={`/create-account`}
            platform={"nextjs"}
            target={"_blank"}
          >
            <Button className={classNames("__wab_instance", sty.button__a0ZFc)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jxdh3
                )}
              >
                {"Login"}
              </div>
            </Button>
          </PlasmicLink__>
        </Stack__>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox___3Yq5R)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__pB640)}
        >
          <GraphCMSFetcher
            data-plasmic-name={"hygraphFetcher"}
            data-plasmic-override={overrides.hygraphFetcher}
            className={classNames("__wab_instance", sty.hygraphFetcher)}
            noAutoRepeat={false}
            noLayout={false}
            query={(() => {
              try {
                return undefined;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
            varOverrides={{}}
          >
            <DataCtxReader__>
              {$ctx => (
                <div className={classNames(projectcss.all, sty.freeBox__w3Mg)}>
                  <GraphCMSField
                    data-plasmic-name={"hygraphField"}
                    data-plasmic-override={overrides.hygraphField}
                    className={classNames("__wab_instance", sty.hygraphField)}
                    themeClassName={classNames(
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
              )}
            </DataCtxReader__>
          </GraphCMSFetcher>
        </Stack__>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h6", "link", "hygraphFetcher", "hygraphField"],
  h6: ["h6"],
  link: ["link"],
  hygraphFetcher: ["hygraphFetcher", "hygraphField"],
  hygraphField: ["hygraphField"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h6: "h6";
  link: "a";
  hygraphFetcher: typeof GraphCMSFetcher;
  hygraphField: typeof GraphCMSField;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignInButtons__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignInButtons__VariantsArgs;
    args?: PlasmicSignInButtons__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignInButtons__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSignInButtons__ArgsType,
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
          internalArgPropNames: PlasmicSignInButtons__ArgProps,
          internalVariantPropNames: PlasmicSignInButtons__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSignInButtons__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignInButtons";
  } else {
    func.displayName = `PlasmicSignInButtons.${nodeName}`;
  }
  return func;
}

export const PlasmicSignInButtons = Object.assign(
  // Top-level PlasmicSignInButtons renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h6: makeNodeComponent("h6"),
    link: makeNodeComponent("link"),
    hygraphFetcher: makeNodeComponent("hygraphFetcher"),
    hygraphField: makeNodeComponent("hygraphField"),

    // Metadata about props expected for PlasmicSignInButtons
    internalVariantProps: PlasmicSignInButtons__VariantProps,
    internalArgProps: PlasmicSignInButtons__ArgProps
  }
);

export default PlasmicSignInButtons;
/* prettier-ignore-end */
