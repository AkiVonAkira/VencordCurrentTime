/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Flux, FluxDispatcher } from "@webpack/common";

export const TimerStore = new class TimerStore extends Flux.Store {
    private time: string = new Date().toLocaleTimeString();

    getTime() {
        return this.time;
    }

    updateTime() {
        this.time = new Date().toLocaleTimeString();
        this.emitChange();
    }

    constructor() {
        super(FluxDispatcher);
        setInterval(() => this.updateTime(), 1000);
    }
};
