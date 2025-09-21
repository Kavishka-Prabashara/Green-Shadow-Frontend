import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // ✅ import Provider
import App from "./App.tsx";
import { store } from "./redux/store"; // ✅ import your store
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}> {/* ✅ Wrap your App in Provider */}
            <App />
        </Provider>
    </StrictMode>
);
