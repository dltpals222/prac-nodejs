const generateDummyData = () => {
  const data = [];

  const locations = [335, 336, 337, 338];
  const cbIdSettings = {
    335: [207],
    336: [304],
    337: [208, 209, 285],
    338: [305]
  };
  const installDateSettings = {
    207: "2024-01-02",
    208: "2024-01-02",
    209: "2024-01-26",
    285: "2024-03-05",
    304: "2024-03-02",
    305: "2024-03-02"
  };
  const chargeDivisionSettings = {
    207: ["rapidity"],
    304: ["slow", "rapidity", "wireless"],
    285: ["slow"],
    305: ["slow"],
    208: ["slow", "rapidity"],
    209: ["slow", "rapidity"]
  };

  locations.forEach(locationId => {
    cbIdSettings[locationId].forEach(cbId => {
      chargeDivisionSettings[cbId].forEach(chargeDivision => {
        const useTimeHap = (Math.floor(Math.random() * 900000) + 100000).toString();
        const installDate = installDateSettings[cbId];
        const upperLocationId = 334;

        data.push({
          location_id: locationId,
          cb_id: cbId,
          charge_division: chargeDivision,
          upper_location_id: upperLocationId,
          use_time_hap: useTimeHap,
          install_date: installDate,
        });
      });
    });
  });

  return data;
};

const dummyData = generateDummyData()
console.log(JSON.stringify(dummyData, null, 2));