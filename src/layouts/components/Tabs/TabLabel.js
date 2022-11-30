import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import CancelIcon from "@mui/material/internal/svg-icons/Cancel";
import withStyles from "@mui/material/styles/withStyles";
import { emphasize, fade } from "@mui/material/styles/colorManipulator";
import useForkRef from "@mui/material/utils/useForkRef";
import unsupportedProp from "@mui/material/utils/unsupportedProp";
import capitalize from "@mui/material/utils/capitalize";
import ButtonBase from "@mui/material/ButtonBase";

export const styles = (theme) => {
  const backgroundColor =
    theme.palette.type === "light"
      ? theme.palette.grey[300]
      : theme.palette.grey[700];
  const deleteIconColor = fade(theme.palette.text.primary, 0.26);

  return {
    /* Styles applied to the root element. */
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      // height: '100%',
      maxWidth: 200,
      color: theme.palette.getContrastText(backgroundColor),
      whiteSpace: "nowrap",
      // transition: theme.transitions.create(['background-color', 'box-shadow']),
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      textDecoration: "none",
      border: "none", // Remove `button` border
      padding: 0, // Remove `button` padding
      verticalAlign: "middle",

      "&:focus": {
        backgroundColor: "none",
      },
      "&$disabled": {
        opacity: 0.5,
        pointerEvents: "none",
      },
    },
    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      height: 24,
    },
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `onDelete` is defined. */
    deletable: {
      "&:focus": {
        backgroundColor: emphasize(backgroundColor, 0.08),
      },
    },
    /* Styles applied to the `icon` element. */
    icon: {
      color:
        theme.palette.type === "light"
          ? theme.palette.grey[700]
          : theme.palette.grey[300],
      marginLeft: 5,
      marginRight: -6,
    },
    /* Styles applied to the `icon` element if `size="small"`. */
    iconSmall: {
      width: 18,
      height: 18,
      marginLeft: 4,
      marginRight: -4,
    },
    /* Styles applied to the `icon` element if `color="primary"`. */
    iconColorPrimary: {
      color: "inherit",
    },
    /* Styles applied to the `icon` element if `color="secondary"`. */
    iconColorSecondary: {
      color: "inherit",
    },
    /* Styles applied to the label `span` element. */
    label: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      paddingLeft: 12,
      paddingRight: 12,
      whiteSpace: "nowrap",
    },
    /* Styles applied to the label `span` element if `size="small"`. */
    labelSmall: {
      paddingLeft: 8,
      paddingRight: 8,
    },
    /* Styles applied to the `deleteIcon` element. */
    deleteIcon: {
      WebkitTapHighlightColor: "transparent",
      color: deleteIconColor,
      height: 22,
      width: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: fade(deleteIconColor, 0.4),
      },
    },
    /* Styles applied to the `deleteIcon` element if `size="small"`. */
    deleteIconSmall: {
      height: 16,
      width: 16,
      marginRight: 4,
      marginLeft: -4,
    },
  };
};

/**
 * Chips represent complex entities in small blocks, such as a contact.
 */
const Chip = React.forwardRef(function Chip(props, ref) {
  const {
    avatar: avatarProp,
    classes,
    className,
    color = "default",
    component: ComponentProp,
    deleteIcon: deleteIconProp,
    disabled = false,
    icon: iconProp,
    label,
    onDelete,
    size = "medium",
    ...other
  } = props;

  const chipRef = React.useRef(null);
  const handleRef = useForkRef(chipRef, ref);

  const handleDeleteIconClick = (event) => {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();
    if (onDelete) {
      onDelete(event);
    }
  };

  const small = size === "small";

  const Component = ComponentProp || "div";
  const moreProps = Component === ButtonBase ? { component: "div" } : {};

  let deleteIcon = null;
  if (onDelete) {
    const customClasses = clsx({
      [classes.deleteIconSmall]: small,
    });

    deleteIcon =
      deleteIconProp && React.isValidElement(deleteIconProp) ? (
        React.cloneElement(deleteIconProp, {
          className: clsx(
            deleteIconProp.props.className,
            classes.deleteIcon,
            customClasses
          ),
          onClick: handleDeleteIconClick,
        })
      ) : (
        <CancelIcon
          className={clsx(classes.deleteIcon, customClasses)}
          onClick={handleDeleteIconClick}
        />
      );
  }

  let avatar = null;
  if (avatarProp && React.isValidElement(avatarProp)) {
    avatar = React.cloneElement(avatarProp, {
      className: clsx(classes.avatar, avatarProp.props.className, {
        [classes.avatarSmall]: small,
        [classes[`avatarColor${capitalize(color)}`]]: color !== "default",
      }),
    });
  }

  let icon = null;
  if (iconProp && React.isValidElement(iconProp)) {
    icon = React.cloneElement(iconProp, {
      className: clsx(classes.icon, iconProp.props.className, {
        [classes.iconSmall]: small,
        [classes[`iconColor${capitalize(color)}`]]: color !== "default",
      }),
    });
  }

  if (process.env.NODE_ENV !== "production") {
    if (avatar && icon) {
      console.error(
        "Material-UI: the Chip component can not handle the avatar " +
          "and the icon prop at the same time. Pick one."
      );
    }
  }

  return (
    <Component
      role={onDelete ? "button" : undefined}
      className={clsx(
        classes.root,
        {
          [classes.disabled]: disabled,
          [classes.sizeSmall]: small,
          [classes[`color${capitalize(color)}`]]: color !== "default",
          [classes.deletable]: onDelete,
          [classes[`deletableColor${capitalize(color)}`]]:
            onDelete && color !== "default",
        },
        className
      )}
      aria-disabled={disabled ? true : undefined}
      tabIndex={onDelete ? 0 : undefined}
      ref={handleRef}
      {...moreProps}
      {...other}
    >
      {avatar || icon}
      <span
        className={clsx(classes.label, {
          [classes.labelSmall]: small,
        })}
      >
        {label}
      </span>
      {deleteIcon}
    </Component>
  );
});

Chip.propTypes = {
  /**
   * Avatar element.
   */
  avatar: PropTypes.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: unsupportedProp,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: PropTypes.element,
  /**
   * If `true`, the chip should be displayed in a disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * Icon element.
   */
  icon: PropTypes.element,
  /**
   * The content of the label.
   */
  label: PropTypes.node,
  /**
   * Callback function fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: PropTypes.func,
  /**
   * The size of the chip.
   */
  size: PropTypes.oneOf(["small", "medium"]),
};

export default withStyles(styles, { name: "MuiChip" })(Chip);
