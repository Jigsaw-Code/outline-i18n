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

function makeLookUpLanguage(availableLanguages: string[]) {
  return (languageId: string): string|undefined => {
    languageId = languageId.toLowerCase();
    for (const availableLanguage of availableLanguages) {
      const parts = availableLanguage.toLowerCase().split('-');
      while (parts.length) {
        const joined = parts.join('-');
        if (languageId === joined) {
          return availableLanguage;
        }
        parts.pop();
      }
    }
  };
}

const browserLanguages = (navigator.languages || [navigator.language]) as string[];

// tslint:disable-next-line:no-any
(window as any).OutlineI18n = {
  getBestMatchingLanguage(available: string[]): string |
  undefined {
    const lookUpAvailable = makeLookUpLanguage(available);
    for (const candidate of browserLanguages) {
      const parts = candidate.split('-');
      while (parts.length) {
        const joined = parts.join('-');
        const closest = lookUpAvailable(joined);
        if (closest) {
          return closest;
        }
        parts.pop();
      }
    }
  }
};
