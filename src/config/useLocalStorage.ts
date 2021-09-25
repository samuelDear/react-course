// eslint-disable-next-line
import React, { useEffect, useState } from 'react';

function useLocalStorage(itemName: string, initialValue: any) {
  useEffect(() => {
    const localStorageItem = localStorage.getItem(itemName);
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getItem = (): any => {
    const localStorageItem = localStorage.getItem(itemName);
    if (localStorageItem) {
      return JSON.parse(localStorageItem);
    }

    return null;
  };

  const saveItem = (newItem: any): void => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
  };

  return {
    getItem,
    saveItem,
  };
}

export { useLocalStorage };
