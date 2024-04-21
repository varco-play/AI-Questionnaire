export const createQuestionnaire = async (field: string) => {
  const res = await fetch("http://localhost:8080/gpt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ field: field }),
  });
  
  return res.json();
};
