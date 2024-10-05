/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import ErrorBoundary from "@components/ErrorBoundary";
import definePlugin from "@utils/types";

import CurrentTime from "./CurrentTime";

export default definePlugin({
    name: "CurrentTime",
    description: "Displays the current time in Discord",
    authors: [{ name: "Akira", id: 325447295455854594n }],
    patches: [
        {
            find: "{isSidebarVisible:",
            replacement: {
                match: /(?<=let\{className:(\i),.+?children):\[(\i\.useMemo[^}]+"aria-multiselectable")/,
                replace: ":[$1?.startsWith('container')?$self.render():null,$2"
            }
        }
    ],
    render: ErrorBoundary.wrap(CurrentTime, { noop: true })
});
