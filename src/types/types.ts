export interface ItemReceiver {
    id: number,
    email: string
}

export interface Item {
    id: string,
    type: "folder" | "file",
    uuid: string,
    name: string,
    date: string,
    timestamp: number,
    lastModified: number,
    lastModifiedSort: number,
    parent: string,
    receiverId: number,
    receiverEmail: string,
    sharerId: number,
    sharerEmail: string,
    color: string | null,
    favorited: boolean,
    isBase: boolean,
    isSync: boolean,
    isDefault: boolean,
    size: number,
    selected: boolean,
    mime: string,
    key: string,
    offline: boolean,
    bucket: string,
    region: string,
    rm: string,
    chunks: number,
    thumbnail: string | undefined,
    version: number,
    hash: string,
    receivers?: ItemReceiver[]
}

export const ItemTemplate: Item = {
    id: "",
    type: "file",
    uuid: "",
    name: "",
    date: "",
    timestamp: 0,
    lastModified: 0,
    lastModifiedSort: 0,
    parent: "",
    receiverId: 0,
    receiverEmail: "",
    sharerId: 0,
    sharerEmail: "",
    color: null,
    favorited: false,
    isBase: false,
    isSync: false,
    isDefault: false,
    size: 0,
    selected: false,
    mime: "",
    key: "",
    offline: false,
    bucket: "",
    region: "",
    rm: "",
    chunks: 0,
    thumbnail: undefined,
    version: 0,
    hash: "",
    receivers: []
}

export interface BuildFolder {
    folder: any,
    name?: string,
    masterKeys?: string[],
    sharedIn?: boolean,
    privateKey?: string,
    routeURL?: string,
    userId?: number,
    loadFolderSizes?: boolean
}

export interface TransfersIndicatorProps {
    navigation: any
}

export interface IndicatorProps {
    darkMode: boolean,
    visible: boolean,
    navigation: any,
    progress: number,
    currentRouteName: string
}

export interface Download {
    data: Item,
    type: string
}

export interface ProgressData {
    type: string,
    data: {
        uuid: string,
        bytes: number
    }
}