$(() => {
    $('.team-member').bind('mouseenter', event => {
      const skills = event.currentTarget.children[0]
      skills.setAttribute("style", "display: block;");
      event.preventDefault();
    });
    
    $('.team-member').bind('mouseleave', event => {
      const element = $(this);
      const skills = event.currentTarget.firstElementChild
      skills.setAttribute("style", "display: none;");
      event.preventDefault();
    });
});