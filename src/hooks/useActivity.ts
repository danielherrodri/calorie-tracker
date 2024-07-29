import { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";

export const useActivity = () => {
    const context = useContext(ActivityContext);

    if (!context) {
        throw new Error('El hook debe ser usado en un activity provider');
    }

    return context
}