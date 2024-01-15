import React from "react";

interface SingleIcon {
  javascript: boolean;
  typescript: boolean;
  java: boolean;
  react: boolean;
  node: boolean;
  nest: boolean;
  html: boolean;
  css: boolean;
  sass: boolean;
  docker: boolean;
}

function icon() {
  return (
    <div>
      <h1></h1>
    </div>
  );
}

export function convertTagsIntoIcons(topics: string[]) {
  const singleIcon: SingleIcon = {
    javascript: false,
    typescript: false,
    java: false,
    react: false,
    node: false,
    nest: false,
    html: false,
    css: false,
    sass: false,
    docker: false,
  };

  for (let i = 0; i < topics.length; i++) {
    switch (topics[i]) {
      case "javascript":
        singleIcon.javascript = true;
        break;
      case "java":
        singleIcon.java = true;
        break;
      case "typescript":
        singleIcon.typescript = true;
        break;
      case "react":
      case "react-native":
      case "reactjs":
      case "reactts":
      case "react-js":
      case "react-ts":
        singleIcon.react = true;
        break;
      case "nodejs":
      case "node":
      case "nodets":
        singleIcon.node = true;
        break;
      case "nestjs":
        singleIcon.nest = true;
        break;
      case "dockerfile":
      case "docker":
      case "docker-compose":
        singleIcon.docker = true;
        break;
      case "html":
      case "html5":
        singleIcon.html = true;
        break;
      case "css3":
      case "css":
        singleIcon.css = true;
        break;
    }
  }

  for (let i = 0; i < 10; i++) {
    if (singleIcon.css) {
    } else if (singleIcon.docker) {
    } else if (singleIcon.html) {
    } else if (singleIcon.java) {
    } else if (singleIcon.javascript) {
    } else if (singleIcon.nest) {
    } else if (singleIcon.node) {
    } else if (singleIcon.react) {
    } else if (singleIcon.sass) {
    } else if (singleIcon.typescript) {
    }
  }
}
