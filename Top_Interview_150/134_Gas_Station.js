/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */


var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0, totalCost = 0;
    let currentGas = 0;
    let startIndex = 0;
    
    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        currentGas += gas[i] - cost[i];
        if (currentGas < 0) {
            startIndex = i + 1;
            currentGas = 0;
        }
    }
    return totalGas < totalCost ? -1 : startIndex;
};
