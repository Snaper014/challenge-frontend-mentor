export const NumberPop = (population: number) => {
    const ConvertNumber = population.toString();
    const Tab = ConvertNumber.split('');
    if (Tab.length > 4) {
      const ReverseTab = Tab.reverse();
      for (let i = 0; i < ReverseTab.length; i++) {
        const index = i + 1;
        if (index % 3 === 0 && index !== ReverseTab.length) {
          ReverseTab[i] = ',' + ReverseTab[i];
        }
      }
      const Newtab = ReverseTab.reverse();
      return Newtab.join('');
    }
    return population;
  };
  