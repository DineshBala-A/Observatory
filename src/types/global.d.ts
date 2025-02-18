export {};
declare global {
    interface Window {
        electron?: {
            minimizeWindow: () => void;
            maximizeWindow: () => void;
            closeWindow: () => void;
            isMaximized: () => void;
        };
    }
}