package com.careerwatch.backend.mapper.resume;


import com.careerwatch.backend.dto.resume.LanguageDto;
import com.careerwatch.backend.entity.Language;
import com.careerwatch.backend.enumeration.ELanguage;
import com.careerwatch.backend.enumeration.ELanguageLevel;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class LanguageDtoMapper {

    public LanguageDto entityToDto(Language language) {
        return LanguageDto.builder()
                .id(language.getId())
                .resumeId(language.getResumeId())
                .language(language.getLanguage().name())
                .languageLevel(language.getLanguageLevel().name())
                .build();
    }

    public Language dtoToLanguage(LanguageDto languageDto) {

        ELanguage language = switch (languageDto.getLanguage().toLowerCase()) {
            case "english" -> ELanguage.ENGLISH;
            case "spanish" -> ELanguage.SPANISH;
            case "portuguese" -> ELanguage.PORTUGUESE;
            case "chinese" -> ELanguage.CHINESE;
            default -> null;
        };
        ELanguageLevel languageLvl = switch (languageDto.getLanguage().toLowerCase()) {
            case "a1" -> ELanguageLevel.A1;
            case "a2" -> ELanguageLevel.A2;
            case "b1" -> ELanguageLevel.B1;
            case "b2" -> ELanguageLevel.B2;
            case "c1" -> ELanguageLevel.C1;
            case "c2" -> ELanguageLevel.C2;
            case "native" -> ELanguageLevel.Native;
            default -> null;
        };

        return Language.builder()
                .resumeId(languageDto.getResumeId())
                .language(language)
                .languageLevel(languageLvl)
                .build();
    }
}
