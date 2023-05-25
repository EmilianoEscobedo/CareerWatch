package com.careerwatch.backend.controller;

import com.careerwatch.backend.dto.resume.SocialDto;
import com.careerwatch.backend.dto.resume.UpdateSocialDto;
import com.careerwatch.backend.service.SocialService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/socials")
public class SocialController {

    private final SocialService socialService;

    @GetMapping
    public ResponseEntity<List<SocialDto>> getAllSocials(@PathVariable Long resumeId) throws JsonProcessingException {
        return ResponseEntity.ok(socialService.getAllSocialsByResumeId(resumeId));
    }

    @GetMapping("/{socialId}")
    public ResponseEntity<SocialDto> getSocialById(@PathVariable Long socialId) throws JsonProcessingException  {
        return ResponseEntity.ok(socialService.getSocialById(socialId));
    }

    @PutMapping("/{socialId}")
    public ResponseEntity<SocialDto> updateSocial(@PathVariable Long socialId, @RequestBody UpdateSocialDto socialDto) throws JsonProcessingException {
        return ResponseEntity.ok(socialService.updateSocialById(socialId, socialDto));
    }

    @DeleteMapping("/{socialId}")
    public ResponseEntity<Void> deleteSocial(@PathVariable Long socialId) throws JsonProcessingException {
        socialService.deleteSocialById(socialId);
        return ResponseEntity.noContent().build();
    }
    
}
