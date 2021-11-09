import React from 'react';
import { render, screen, cleanup } from "@testing-library/react";
import CreateRecipe from '.';

afterEach (() => {
  cleanup();
});

