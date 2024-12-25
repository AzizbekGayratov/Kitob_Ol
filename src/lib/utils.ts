import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function ToCyrillic(text: string) {
  // Mapping of Latin letters/groups to Cyrillic equivalents
  const translitMap = [
    { latin: /shch/gi, cyrillic: "щ" },
    { latin: /sh/gi, cyrillic: "ш" },
    { latin: /ch/gi, cyrillic: "ч" },
    { latin: /kh/gi, cyrillic: "х" },
    { latin: /ts/gi, cyrillic: "ц" },
    { latin: /yu/gi, cyrillic: "ю" },
    { latin: /ya/gi, cyrillic: "я" },
    { latin: /yo/gi, cyrillic: "ё" },
    { latin: /zh/gi, cyrillic: "ж" },
    { latin: /a/gi, cyrillic: "а" },
    { latin: /b/gi, cyrillic: "б" },
    { latin: /v/gi, cyrillic: "в" },
    { latin: /g/gi, cyrillic: "г" },
    { latin: /d/gi, cyrillic: "д" },
    { latin: /e/gi, cyrillic: "е" },
    { latin: /z/gi, cyrillic: "з" },
    { latin: /i/gi, cyrillic: "и" },
    { latin: /y/gi, cyrillic: "й" },
    { latin: /k/gi, cyrillic: "к" },
    { latin: /l/gi, cyrillic: "л" },
    { latin: /m/gi, cyrillic: "м" },
    { latin: /n/gi, cyrillic: "н" },
    { latin: /o/gi, cyrillic: "о" },
    { latin: /p/gi, cyrillic: "п" },
    { latin: /r/gi, cyrillic: "р" },
    { latin: /s/gi, cyrillic: "с" },
    { latin: /t/gi, cyrillic: "т" },
    { latin: /u/gi, cyrillic: "у" },
    { latin: /f/gi, cyrillic: "ф" },
    { latin: /h/gi, cyrillic: "х" },
    { latin: /j/gi, cyrillic: "дж" },
    // { latin: /hn/gi, cyrillic: " н" },
  ];

  // Replace each Latin sequence with its Cyrillic counterpart
  translitMap.forEach(({ latin, cyrillic }) => {
    text = text.replace(latin, cyrillic);
  });

  return text;
} 
