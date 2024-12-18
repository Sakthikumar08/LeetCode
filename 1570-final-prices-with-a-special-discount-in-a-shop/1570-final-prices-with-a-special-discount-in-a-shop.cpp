#include <vector>
using namespace std;

class Solution {
public:
    vector<int> finalPrices(vector<int>& prices) {
        int n = prices.size();
        vector<int> result(prices); // Start with the original prices
        
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                if (prices[j] <= prices[i]) {
                    result[i] -= prices[j]; // Apply the discount
                    break; // Stop after finding the first discount
                }
            }
        }
        
        return result;
    }
};
