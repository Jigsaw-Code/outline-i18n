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
function getBrowserLanguages() {
    // Ensure that navigator.languages is defined and not empty, as can be the case with some browsers
    // (i.e. Chrome 59 on Electron).
    var languages = navigator.languages;
    if (languages && languages.length > 0) {
        return languages;
    }
    return [navigator.language];
}
// tslint:disable-next-line:no-any
window.OutlineI18n = {
    getBestMatchingLanguage: function (available) {
        var lookUpAvailable = makeLookUpLanguage(available);
        for (var _i = 0, _a = getBrowserLanguages(); _i < _a.length; _i++) {
            var candidate = _a[_i];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBcUM7QUFDckMsRUFBRTtBQUNGLGtFQUFrRTtBQUNsRSxtRUFBbUU7QUFDbkUsMENBQTBDO0FBQzFDLEVBQUU7QUFDRixrREFBa0Q7QUFDbEQsRUFBRTtBQUNGLHNFQUFzRTtBQUN0RSxvRUFBb0U7QUFDcEUsMkVBQTJFO0FBQzNFLHNFQUFzRTtBQUN0RSxpQ0FBaUM7QUFFakMsNEJBQTRCLGtCQUE0QjtJQUN0RCxNQUFNLENBQUMsVUFBQyxVQUFrQjtRQUN4QixVQUFVLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxDQUE0QixVQUFrQixFQUFsQix5Q0FBa0IsRUFBbEIsZ0NBQWtCLEVBQWxCLElBQWtCO1lBQTdDLElBQU0saUJBQWlCLDJCQUFBO1lBQzFCLElBQU0sS0FBSyxHQUFHLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6RCxPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDcEIsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsRUFBRSxDQUFDLENBQUMsVUFBVSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQzFCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztnQkFDM0IsQ0FBQztnQkFDRCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDZCxDQUFDO1NBQ0Y7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQ7SUFDRSxrR0FBa0c7SUFDbEcsZ0NBQWdDO0lBQ2hDLElBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFxQixDQUFDO0lBQ2xELEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBQ0QsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFFRCxrQ0FBa0M7QUFDakMsTUFBYyxDQUFDLFdBQVcsR0FBRztJQUM1Qix1QkFBdUIsRUFBdkIsVUFBd0IsU0FBbUI7UUFFekMsSUFBTSxlQUFlLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEQsR0FBRyxDQUFDLENBQW9CLFVBQXFCLEVBQXJCLEtBQUEsbUJBQW1CLEVBQUUsRUFBckIsY0FBcUIsRUFBckIsSUFBcUI7WUFBeEMsSUFBTSxTQUFTLFNBQUE7WUFDbEIsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQyxPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDcEIsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsSUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNaLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ2pCLENBQUM7Z0JBQ0QsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2QsQ0FBQztTQUNGO0lBQ0gsQ0FBQztDQUNGLENBQUMifQ==