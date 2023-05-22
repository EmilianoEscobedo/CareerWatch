package com.careerwatch.backend.dto.resume;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class ProfileDto {
    private Long id;
    private Long resumeId;
    private String fullName;
    private String title;
    private String email;
    private String phone;
    private String location;
    private String imgResume;
    private List<SocialDto> socials;
}
