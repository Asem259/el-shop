import { Dispatch, SetStateAction } from "react";
import { Collapse, Stack, Text, Tooltip, UnstyledButton } from "@mantine/core";
import { IconType } from "react-icons";
import useStyles from "./navGroup.style";
import { BsDashSquare } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";
import { TbChevronDown } from "react-icons/tb";

interface NavLinksControlProps {
  setActiveGroup: Dispatch<SetStateAction<string>>;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
  name: string;
  collapsed: boolean;
  icon: IconType;
  links: any;
  isActive: boolean;
}

const NavLinksGroup = ({
  setActiveGroup,
  isActive,
  name,
  icon: Icon,
  links,
  collapsed,
  setCollapsed,
}: NavLinksControlProps) => {
  const { classes, cx } = useStyles({ collapsed, isActive });

  const handleClick = () => {
    if (collapsed) {
      setCollapsed(false);
      setActiveGroup(() => name);
    } else {
      setActiveGroup((prev) => (prev === name ? "" : name));
    }
  };

  return (
    <>
      <UnstyledButton
        px="lg"
        className={cx(classes.itemControl, classes.flex)}
        onClick={handleClick}
      >
        <Icon size={18} className={classes.icon} />
        <Text className={classes.label}>{name}</Text>
      </UnstyledButton>
      <Collapse bg={isActive ? "blue.1" : "white"} in={collapsed || isActive}>
        <Stack spacing={4}>
          {links.map(
            (link: { label: string; path: string; icon: IconType }) => {
              const LinkIcon = link.icon;

                return (
                  <Tooltip
                    key={link.label}
                    disabled={!collapsed}
                    label={link.label}
                    position="right"
                  >
                    <UnstyledButton
                      className={cx(classes.flex, classes.navItem)}
                      component={RouterLink}
                      to={link.path}
                      py={collapsed ? "md" : "xs"}
                    >
                      {collapsed ? (
                        <LinkIcon size={14} />
                      ) : (
                        <>
                          <BsDashSquare size={14} />
                          <Text ml="md" sx={{ flexGrow: 1 }} size="sm">
                            {link.label}
                          </Text>
                        </>
                      )}
                    </UnstyledButton>
                  </Tooltip>
                );
              }
            )}
          </Stack>
        </Collapse>
      )}
    </>
  );
};

export default NavLinksGroup;

