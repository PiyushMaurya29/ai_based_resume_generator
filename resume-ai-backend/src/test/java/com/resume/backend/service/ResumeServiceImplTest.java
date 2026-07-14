package com.resume.backend.service;

import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertInstanceOf;
import static org.junit.jupiter.api.Assertions.assertNull;

class ResumeServiceImplTest {

    @Test
    void parseMultipleResponsesExtractsThinkBlockAndJsonData() {
        String response = """
                <think>Preparing resume sections</think>
                ```json
                {"summary":"Java developer","skills":[{"title":"Java","level":"Advanced"}]}
                ```
                """;

        Map<String, Object> result = ResumeServiceImpl.parseMultipleResponses(response);
        Map<?, ?> data = assertInstanceOf(Map.class, result.get("data"));

        assertEquals("Preparing resume sections", result.get("think"));
        assertEquals("Java developer", data.get("summary"));
    }

    @Test
    void parseMultipleResponsesReturnsNullsWhenResponseIsMissingExpectedBlocks() {
        Map<String, Object> result = ResumeServiceImpl.parseMultipleResponses("plain text");

        assertNull(result.get("think"));
        assertNull(result.get("data"));
    }
}
