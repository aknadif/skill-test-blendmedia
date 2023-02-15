import React from "react";
import NextLink from "next/link";

interface CLinkProps {
    href: string;
    text?: string;
    children?: React.ReactNode;
}
const CLink = ({
    href,
    text,
    children
}: CLinkProps) => {
    return (
        <NextLink
            href={href}
            passHref
            style={{
                textDecoration: "none",
                color: "inherit"
            }}
        >
                {text || children}
        </NextLink>
    )
}

export default CLink;
