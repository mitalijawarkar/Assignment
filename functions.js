var projectList = {
  projects: [],
  displayProject: function() {       
     this.projects.forEach(project => {
          console.log( project);
      });
  },
  
  
  addProject: function(id, name,  status){
      this.projects[id] = {
          id: id,
          name: name,
          status:status
      };
      this.displayProject();
  },
  updateStatus: function(id, status) {
      this.projects[id].status=status;
      this.displayProject();
  },
      deleteProject: function(id) {
      this.projects.splice(id, 1);
      this.displayProject();
  }
} 
  
  