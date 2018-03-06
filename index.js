// Copyright 2018 The Outline Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
function makeLookUpLanguage(availableLanguages) {
    return function (languageId) {
        languageId = languageId.toLowerCase();
        for (var _i = 0, availableLanguages_1 = availableLanguages; _i < availableLanguages_1.length; _i++) {
            var availableLanguage = availableLanguages_1[_i];
            var parts = availableLanguage.toLowerCase().split('-');
            while (parts.length) {
                var joined = parts.join('-');
                if (languageId === joined) {
                    return availableLanguage;
                }
                parts.pop();
            }
        }
    };
}
var browserLanguages = (navigator.languages || [navigator.language]);
// tslint:disable-next-line:no-any
window.OutlineI18n = {
    getBestMatchingLanguage: function (available) {
        var lookUpAvailable = makeLookUpLanguage(available);
        for (var _i = 0, browserLanguages_1 = browserLanguages; _i < browserLanguages_1.length; _i++) {
            var candidate = browserLanguages_1[_i];
            var parts = candidate.split('-');
            while (parts.length) {
                var joined = parts.join('-');
                var closest = lookUpAvailable(joined);
                if (closest) {
                    return closest;
                }
                parts.pop();
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBcUM7QUFDckMsRUFBRTtBQUNGLGtFQUFrRTtBQUNsRSxtRUFBbUU7QUFDbkUsMENBQTBDO0FBQzFDLEVBQUU7QUFDRixrREFBa0Q7QUFDbEQsRUFBRTtBQUNGLHNFQUFzRTtBQUN0RSxvRUFBb0U7QUFDcEUsMkVBQTJFO0FBQzNFLHNFQUFzRTtBQUN0RSxpQ0FBaUM7QUFFakMsNEJBQTRCLGtCQUE0QjtJQUN0RCxNQUFNLENBQUMsVUFBQyxVQUFrQjtRQUN4QixVQUFVLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxDQUE0QixVQUFrQixFQUFsQix5Q0FBa0IsRUFBbEIsZ0NBQWtCLEVBQWxCLElBQWtCO1lBQTdDLElBQU0saUJBQWlCLDJCQUFBO1lBQzFCLElBQU0sS0FBSyxHQUFHLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6RCxPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDcEIsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsRUFBRSxDQUFDLENBQUMsVUFBVSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQzFCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztnQkFDM0IsQ0FBQztnQkFDRCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDZCxDQUFDO1NBQ0Y7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQWEsQ0FBQztBQUVuRixrQ0FBa0M7QUFDakMsTUFBYyxDQUFDLFdBQVcsR0FBRztJQUM1Qix1QkFBdUIsRUFBdkIsVUFBd0IsU0FBbUI7UUFFekMsSUFBTSxlQUFlLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEQsR0FBRyxDQUFDLENBQW9CLFVBQWdCLEVBQWhCLHFDQUFnQixFQUFoQiw4QkFBZ0IsRUFBaEIsSUFBZ0I7WUFBbkMsSUFBTSxTQUFTLHlCQUFBO1lBQ2xCLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3BCLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQy9CLElBQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDWixNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNqQixDQUFDO2dCQUNELEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNkLENBQUM7U0FDRjtJQUNILENBQUM7Q0FDRixDQUFDIn0=