// services/cvService.ts

// Mock data pour simuler l'analyse AI en attendant les vrais services
export interface CVAnalysis {
  score: number;
  skills: string[];
  improvements: string[];
  missingKeywords: string[];
  overallFeedback: string;
}

// Simulation d'analyse AI
export const analyzeCV = async (file: File): Promise<CVAnalysis> => {
  // Simuler un délai d'analyse (2-3 secondes)
  await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1000));
  
  // Données mockées basées sur le type de fichier
  const baseScore = 65 + Math.floor(Math.random() * 30); // Score entre 65-95
  
  return {
    score: baseScore,
    skills: [
      'Customer Service',
      'Safety Procedures', 
      'Communication Skills',
      'Teamwork',
      'Problem Solving',
      'Multilingual'
    ].slice(0, 3 + Math.floor(Math.random() * 3)),
    
    improvements: [
      'Add more specific achievements and metrics',
      'Include safety certifications (CPR, First Aid)',
      'Highlight language proficiencies',
      'Add relevant aviation training',
      'Include customer service experience details'
    ].slice(0, 2 + Math.floor(Math.random() * 2)),
    
    missingKeywords: [
      'safety compliance',
      'emergency procedures',
      'passenger service',
      'crew resource management'
    ].slice(0, 2 + Math.floor(Math.random() * 2)),
    
    overallFeedback: baseScore >= 80 
      ? 'Strong foundation for aviation roles. Focus on adding specific safety certifications and customer service metrics.'
      : 'Good potential. Consider adding aviation-specific training and highlighting transferable skills more effectively.'
  };
};

// Simulation d'upload de fichier
export const uploadCVFile = async (file: File): Promise<{ success: boolean; fileId?: string }> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Vérification basique du type de fichier
  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  if (!allowedTypes.includes(file.type)) {
    throw new Error('File type not supported. Please upload PDF, DOC, or DOCX files.');
  }
  
  // Vérification de la taille (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    throw new Error('File size too large. Please upload files smaller than 5MB.');
  }
  
  return {
    success: true,
    fileId: `file_${Date.now()}`
  };
};