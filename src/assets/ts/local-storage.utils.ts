import { JwtModel } from "../../app/models/jwt.model";

export function getLocalStorageData(name: string): string | undefined {
  const lsValue: string | null = localStorage.getItem(name);
  if (!lsValue) {
    return undefined;
  }
  return lsValue;
}

export function setLocalStorageData(name: string, data: any): void {
  localStorage.setItem(name, data);
}

export function removeLocalStorageData(name: string): void {
  localStorage.removeItem(name);
}

export function clearLocalStorageAllData(): void {
  localStorage.clear();
}


export function getJwtLocalDataStorage(name: string): JwtModel | undefined {
  try {
    const lsValue = getLocalStorageData(name);
    if (!lsValue) {
      return undefined;
    }

    return JSON.parse(lsValue);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}