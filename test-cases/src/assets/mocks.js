const steps = [
  {
    step: "Step 1",
    expectedResult: "Expected result 1"
  },
  {
    step: "Step 2",
    expectedResult: "Expected result 2"
  },
  {
    step: "Deserunt elit ex exercitation nulla esse occaecat commodo ullamco occaecat.",
    expectedResult: "Tempor amet aliquip fugiat eu cillum fugiat non fugiat Lorem exercitation commodo ad."
  }
]

const testCase = {
  name: "Test Case 1",
  description: "Test Case 1 Voluptate culpa ea tempor mollit non culpa laboris non nostrud deserunt enim velit excepteur aliquip. Culpa commodo ea et proident ut. In aliqua id sint ullamco culpa velit enim culpa id mollit eu ea. Aliqua et Lorem laborum cupidatat nostrud labore consequat proident excepteur.",
  preconditions: "Test Case 1 Dolor tempor mollit eu exercitation quis officia reprehenderit laborum Lorem deserunt pariatur ullamco ex. Laborum eu officia amet officia est sint veniam. Ea id ut dolor laboris laboris commodo ad minim incididunt laboris elit eiusmod reprehenderit Lorem. Irure deserunt dolor eiusmod aute.",
  tags: ["tag 1", "tag tag  tag tag 2", "tag 3", "tag 4", "tag 5"],
  steps: steps
}

const projects = [
  {
    name: "Project 1",
    folders: [{ name: "Folder 1", tests: ["T1F1", "T2F2"] }],
    tests: ["Test 1", "Test 2", "Test 3"]
  },
  {
    name: "Project 2",
    folders: [
      { name: "Folder 1", tests: ["T1F1", "T2F2"] },
      { name: "Folder 2", folders: [{ name: "Folder21", tests: ["T1F21", "T2F21"] }], tests: ["T1F2"] }
    ],
  },
  {
    name: "Project 3",
    tests: ["Test 1", "Test 2", "Test 3"]
  },
]

export { testCase, projects }