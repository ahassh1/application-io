import { toast } from "react-toastify";

const getFromLocalStorage = () => {
  const installApps = localStorage.getItem("installed");
  if (installApps) {
    return JSON.parse(installApps);
  }
  return [];
};

const saveToLocalStorage = (id) => {
  const installApps = getFromLocalStorage();
  if (installApps.includes(id)) {
    toast("Already installed this app");
  } else {
    installApps.push(id);
  }

  const installAppsStr = JSON.stringify(installApps);
  localStorage.setItem("installed", installAppsStr);
};

export { getFromLocalStorage, saveToLocalStorage };
