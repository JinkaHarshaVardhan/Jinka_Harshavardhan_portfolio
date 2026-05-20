---
layout: project
title: Agentic AI
subtitle: Multi-agent systems, LangGraph orchestration, and LLM workflows.
parent_hub: /projects/
parent_label: All Projects
permalink: /projects/agentic-ai/
tag_peach: true
tag: Multi-Agent · LangGraph
github: https://github.com/JinkaHarshaVardhan
---

## AI Sprint Copilot — Multi-Agent Agile Intelligence Platform {#sprint-copilot}

### Overview

A multi-agent AI system for sprint analytics that integrates **GitHub** commits, pull requests, contributors, and **Plane** sprint tasks into a unified context layer for intelligent agile insights.

### Problem

Engineering teams need consolidated sprint visibility across GitHub activity and project management tools — without manually correlating commits, PRs, and task status.

### Solution

Built **Summary**, **Standup**, **Risk**, and **ReAct** agents with visible reasoning traces, conversation memory, and local LLM execution using **Qwen3** via **Ollama**.

### Tech Stack

- Python, FastAPI, HTML/CSS/JS
- LangGraph, LangChain, FastMCP, ReAct
- GitHub API, Plane API
- Ollama, Qwen3
- Pytest

### Architecture

```
GitHub + Plane APIs → Unified Context Layer → LangGraph Orchestration
                              ↓
        Summary | Standup | Risk | ReAct agents (Qwen3 / Ollama)
                              ↓
              Parallel merge pipelines · conversation memory
```

### Key Features

- LangChain-based parallel merge pipelines for multi-agent queries
- Intelligent sprint analysis with visible agent reasoning traces
- Local LLM execution for privacy-friendly development workflows

### Outcomes

End-to-end multi-agent platform demonstrating production-style agent orchestration, tool integration, and sprint intelligence beyond single-shot LLM prompts.

