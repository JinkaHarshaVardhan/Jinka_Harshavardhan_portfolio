---
layout: project
title: Agentic AI
subtitle: LangChain agents, tool use, RAG, and orchestrated LLM workflows.
parent_hub: /projects/
parent_label: All Projects
permalink: /projects/agentic-ai/
tag_peach: true
tag: Workflows · Agents
github: https://github.com/JinkaHarshaVardhan
---

## Agentic LLM Pipelines

Building on production LLM work at Immerso.ai, I design agentic systems that chain retrieval, reasoning, and tool invocation — from prototype notebooks to Streamlit demos.

### Problem

Single-shot prompts fail on multi-step research tasks. Agents need memory, tools, and guardrails.

### Architecture

```
User Goal → Planner Agent → Tool Router → {Search, Code, Vision APIs}
                ↓                ↓
           Memory Store    RAG Vector DB → Synthesizer → Validated Output
```

### Tech Stack

- LangChain, prompt engineering, RAG
- Python, Streamlit, multimodal AI

### Outcomes

Repeatable workflows for internal R&D — faster experimentation with eval hooks and human-in-the-loop review.
