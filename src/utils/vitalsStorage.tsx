import { VitalsRecord, GroupedHistory } from '../types/vitals';

export const saveVitalsRecord = (record: VitalsRecord) => {
  const history = getVitalsHistory();
  localStorage.setItem('vitalsHistory', JSON.stringify([...history, record]));
};

export const getVitalsHistory = (): VitalsRecord[] => {
  return JSON.parse(localStorage.getItem('vitalsHistory') || '[]');
};

export const clearVitalsHistory = () => {
  localStorage.removeItem('vitalsHistory');
};

export const groupHistoryByName = (history: VitalsRecord[]): GroupedHistory => {
  return history.reduce((groups: GroupedHistory, record) => {
    const name = record.name;
    if (!groups[name]) {
      groups[name] = [];
    }
    groups[name].push(record);
    return groups;
  }, {});
};